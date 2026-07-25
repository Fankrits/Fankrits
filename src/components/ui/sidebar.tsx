"use client";
import React, { useState, useEffect } from "react";

export interface SidebarItem {
  key: string;
  label: string;
  icon?: string | React.ReactNode;
  badge?: string | number;
  tag?: string;
  children?: SidebarItem[];
}

export interface SidebarProps {
  items: SidebarItem[];
  activeKey?: string;
  onSelect?: (key: string) => void;
  collapsed?: boolean;
  width?: number;
  title?: string;
  className?: string;
}

const flattenItems = (
  items: SidebarItem[],
  expandedKeys: Set<string>,
  depth = 0,
): { item: SidebarItem; depth: number }[] => {
  const result: { item: SidebarItem; depth: number }[] = [];
  for (const item of items) {
    result.push({ depth, item });
    if (item.children && expandedKeys.has(item.key)) {
      result.push(...flattenItems(item.children, expandedKeys, depth + 1));
    }
  }
  return result;
};

export const Sidebar = ({
  items,
  activeKey,
  onSelect,
  collapsed = false,
  title,
  className = "",
}: SidebarProps) => {
  const [focusIndex, setFocusIndex] = useState(0);
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());

  const flatItems = flattenItems(items, expandedKeys);

  const toggleExpand = (key: string) => {
    setExpandedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setFocusIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowDown") {
        setFocusIndex((prev) => Math.min(flatItems.length - 1, prev + 1));
      } else if (e.key === "Enter") {
        const entry = flatItems[focusIndex];
        if (!entry) return;
        if (entry.item.children && entry.item.children.length > 0) {
          toggleExpand(entry.item.key);
        } else {
          onSelect?.(entry.item.key);
        }
      } else if (e.key === "ArrowRight") {
        const entry = flatItems[focusIndex];
        if (entry?.item.children && entry.item.children.length > 0) {
          setExpandedKeys((prev) => new Set([...prev, entry.item.key]));
        }
      } else if (e.key === "ArrowLeft") {
        const entry = flatItems[focusIndex];
        if (entry?.item.children && expandedKeys.has(entry.item.key)) {
          setExpandedKeys((prev) => {
            const next = new Set(prev);
            next.delete(entry.item.key);
            return next;
          });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [flatItems, focusIndex, expandedKeys, onSelect]);

  return (
    <div className={`flex flex-col font-agave font-mono ${className}`}>
      {title && !collapsed && (
        <div className="px-3 py-2 text-xs font-bold text-emerald-400 uppercase tracking-wider border-b border-neutral-800/80 mb-2 flex items-center justify-between">
          <span>{title}</span>
          <span className="text-[10px] text-neutral-500 font-normal">TUI v1.0</span>
        </div>
      )}

      <div className="space-y-1">
        {flatItems.map(({ item, depth }, idx) => {
          const isFocused = idx === focusIndex;
          const isActive = item.key === activeKey;
          const indent = collapsed ? 0 : depth * 12;
          const hasChildren = Boolean(item.children && item.children.length > 0);
          const isExpanded = expandedKeys.has(item.key);

          if (collapsed) {
            return (
              <button
                key={item.key}
                onClick={() => onSelect?.(item.key)}
                className={`w-full p-2 flex items-center justify-center rounded-lg transition-all ${
                  isActive
                    ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/30"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"
                }`}
              >
                <span className="text-sm font-bold">
                  {typeof item.icon === "string" ? item.icon : item.label.charAt(0)}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.key}
              onClick={() => {
                setFocusIndex(idx);
                if (hasChildren) {
                  toggleExpand(item.key);
                } else {
                  onSelect?.(item.key);
                }
              }}
              style={{ paddingLeft: `${12 + indent}px` }}
              className={`w-full flex items-center justify-between py-3 pr-3.5 rounded-xl text-left transition-all font-mono text-xs md:text-sm ${
                isActive
                  ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 shadow-[0_0_18px_rgba(16,185,129,0.2)] font-bold"
                  : isFocused
                    ? "bg-neutral-800/80 text-white border border-neutral-700/60"
                    : "text-neutral-300 hover:bg-neutral-800/60 hover:text-white border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3 truncate">
                <span className={`text-xs ${isActive ? "text-emerald-400" : "text-neutral-500"}`}>
                  {isActive ? "▌" : " "}
                </span>
                {hasChildren && (
                  <span className="text-neutral-500 text-xs">{isExpanded ? "▾" : "▸"}</span>
                )}
                {item.icon && <span className="shrink-0">{item.icon}</span>}
                <span className="truncate">{item.label}</span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {item.tag && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {item.tag}
                  </span>
                )}
                {item.badge !== undefined && (
                  <span className="text-xs text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-800">
                    {item.badge}
                  </span>
                )}
                <span className="text-xs opacity-50 font-mono">[{idx + 1}]</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
