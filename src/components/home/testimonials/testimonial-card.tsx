"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  featured?: boolean;
  index: number;
}

export function TestimonialCard({
  name,
  role,
  image,
  quote,
  featured = false,
  index,
}: TestimonialCardProps) {
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
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-slate-200
        bg-white/75
        backdrop-blur-xl
        transition-all
        duration-500
        hover:shadow-[0_25px_100px_rgba(14,165,233,0.12)]
        ${
          featured
            ? "p-10 lg:p-12"
            : "p-7"
        }
      `}
    >
      {/* GLOW */}
      <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-cyan-200/20 blur-[90px] transition-all duration-500 group-hover:scale-125" />

      {/* STARS */}
      <div className="relative z-10 flex items-center gap-1">
        {[1,2,3,4,5].map((star) => (
          <Star
            key={star}
            className="size-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* QUOTE */}
      <blockquote
        className={`
          relative
          z-10
          mt-7
          font-medium
          leading-[1.7]
          tracking-[-0.03em]
          text-slate-800
          ${
            featured
              ? "max-w-[760px] text-[1.4rem] lg:text-[2rem]"
              : "text-[1.05rem]"
          }
        `}
      >
        “{quote}”
      </blockquote>

      {/* USER */}
      <div className="relative z-10 mt-10 flex items-center gap-4">

        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="text-[1rem] font-semibold tracking-[-0.03em] text-slate-950">
            {name}
          </h4>

          <p className="mt-1 text-sm text-slate-500">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
