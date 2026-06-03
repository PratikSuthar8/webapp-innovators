"use client";

import { motion } from "framer-motion";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

export function ProcessCard({
  number,
  title,
  description,
  icon: Icon,
  index,
}: ProcessCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-slate-200
        bg-white/70
        p-8
        shadow-[0_10px_60px_rgba(15,23,42,0.06)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-200
        hover:shadow-[0_25px_100px_rgba(14,165,233,0.12)]
      "
    >
      {/* GLOW */}
      <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-cyan-200/20 blur-[90px] transition-all duration-500 group-hover:scale-125" />

      {/* TOP */}
      <div className="relative z-10 flex items-start justify-between">
        
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg">
          <Icon className="size-8" />
        </div>

        <span className="text-[2.8rem] sm:text-[3.2rem] lg:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-extrabold leading-none tracking-[-0.08em] text-slate-100">
          {number}
        </span>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-10">
        <h3 className="text-[2rem] font-bold tracking-[-0.06em] text-slate-950">
          {title}
        </h3>

        <p className="mt-5 text-[1rem] leading-[1.9] text-slate-600">
          {description}
        </p>
      </div>

      {/* BOTTOM LINE */}
      <div className="relative z-10 mt-10 h-[4px] overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: index * 0.15,
          }}
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
        />
      </div>
    </motion.div>
  );
}
