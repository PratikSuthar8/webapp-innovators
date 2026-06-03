import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 sm:py-14 lg:py-24 md:py-16 lg:py-28 lg:py-20 lg:py-32",
        className
      )}
    >
      {children}
    </section>
  );
}
