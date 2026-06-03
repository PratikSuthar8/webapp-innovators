"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  features: string[];
  index: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  index,
}: ServiceCardProps) {
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
        duration: 0.7,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[38px]
        border
        border-slate-200
        bg-white/75
        p-8
        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-200
        hover:shadow-[0_25px_100px_rgba(14,165,233,0.12)]
        lg:p-10
      "
    >
      {/* GLOW */}
      <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-cyan-200/10 blur-[90px]" />

      <div className="relative z-10">

        {/* TOP */}
        <div className="flex items-start justify-between gap-6">

          {/* ICON */}
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-cyan-400
              text-white
              shadow-lg
            "
          >
            <Icon className="size-7" />
          </div>

          {/* BUTTON */}
          <button
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-700
              transition-all
              duration-300
              group-hover:border-cyan-200
              group-hover:bg-cyan-400
              group-hover:text-white
            "
          >
            <ArrowUpRight className="size-5" />
          </button>
        </div>

        {/* TITLE */}
        <h3 className="mt-10 text-[2rem] font-extrabold leading-[1] tracking-[-0.06em] text-slate-950">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-6 text-[1rem] leading-[2] text-slate-600">
          {description}
        </p>

        {/* FEATURES */}
        <div className="mt-8 flex flex-wrap gap-3">

          {features.map((feature) => (
            <div
              key={feature}
              className="
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
              "
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
