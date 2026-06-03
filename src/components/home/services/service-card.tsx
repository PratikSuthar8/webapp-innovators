"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  size?: "small" | "large";
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  size = "small",
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white/70
        backdrop-blur-xl
        shadow-[0_10px_50px_rgba(15,23,42,0.06)]
        transition-all
        duration-500
        hover:shadow-[0_20px_80px_rgba(14,165,233,0.12)]
        ${
          size === "large"
            ? "min-h-[320px] p-10"
            : "min-h-[240px] p-8"
        }
      `}
    >
      {/* GLOW */}
      <div className="absolute right-[-60px] top-[-60px] h-[180px] w-[180px] rounded-full bg-cyan-200/30 blur-[90px] transition-all duration-500 group-hover:scale-125" />

      {/* ICON */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg">
        <Icon className="size-8" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-8">
        <h3 className="text-[2rem] font-bold tracking-[-0.06em] text-slate-950">
          {title}
        </h3>

        <p className="mt-4 max-w-[320px] text-[1rem] leading-[1.8] text-slate-600">
          {description}
        </p>
      </div>

      {/* BUTTON */}
      <div className="relative z-10 mt-10 flex items-center gap-2 text-[0.95rem] font-semibold text-blue-600">
        Explore Service

        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>

      {/* BORDER GRADIENT */}
      <div className="absolute inset-0 rounded-[32px] border border-transparent bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
