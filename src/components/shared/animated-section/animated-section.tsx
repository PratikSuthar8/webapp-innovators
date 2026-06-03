"use client";

import { useRef } from "react";

import { useReveal } from "@/hooks/use-reveal";

export function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useReveal(ref);

  return (
    <section
      ref={ref}
      className={className}
    >
      {children}
    </section>
  );
}
