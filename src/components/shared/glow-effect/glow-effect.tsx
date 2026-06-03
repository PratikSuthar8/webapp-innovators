import { cn } from "@/lib/utils";

interface GlowEffectProps {
  className?: string;
}

export function GlowEffect({
  className,
}: GlowEffectProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/30 blur-[90px]" />

      <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[90px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-sky-300/20 blur-[90px]" />
    </div>
  );
}
