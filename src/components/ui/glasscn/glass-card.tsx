"use client";

import { type FrostGlassVariantProp, glassVariantStyles } from "#/lib/glass-variants.ts";
import { cn } from "#/lib/utils.ts";

import { Card } from "../card";
import { LiquidGlass, type LiquidGlassProps } from "./liquid-glass";

type GlassCardProps = React.ComponentProps<typeof Card> &
  FrostGlassVariantProp & {
    liquidProps?: Omit<LiquidGlassProps, "children">;
    surfaceClassName?: string;
  };

function GlassCard({
  className,
  glassVariant = "liquid-refract",
  liquidProps,
  surfaceClassName,
  ...props
}: GlassCardProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <LiquidGlass
        {...liquidProps}
        className={cn("rounded-2xl", surfaceClassName, liquidProps?.className)}
      >
        <Card
          data-slot="glass-card"
          data-glass-variant={glassVariant}
          className={cn("bg-transparent border-0 shadow-none ring-0", className)}
          {...props}
        />
      </LiquidGlass>
    );
  }

  return (
    <Card
      data-slot="glass-card"
      data-glass-variant={glassVariant}
      className={cn(glassVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassCard };
