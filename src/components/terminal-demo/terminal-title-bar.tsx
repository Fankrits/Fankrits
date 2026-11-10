export function TerminalTitleBar() {
  return (
    <div className="flex items-center justify-between bg-[#191c27] border-b border-[#262b3d] px-4 py-2.5 shrink-0 font-mono text-xs select-none">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
        <div className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
        <div className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
      </div>
      <div className="text-center font-bold text-neutral-300 text-xs truncate max-w-md">
        fankrits@macbook-pro: ~/Projects/fankrits (zsh)
      </div>
      <div className="text-[11px] text-emerald-400 font-mono hidden sm:block">● ONLINE</div>
    </div>
  );
}
