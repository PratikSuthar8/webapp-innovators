"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container/container";

interface PageHeroProps {
  badge: string;
  title: string;
  highlightedText?: string;
  description: string;
}

export function PageHero({
  badge,
  title,
  highlightedText,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[180px] pb-24 lg:pb-20 lg:pb-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* GLOWS */}
      <div className="absolute left-[-150px] top-[80px] h-[320px] w-[320px] rounded-full bg-cyan-200/20 blur-[100px]" />

      <div className="absolute right-[-150px] top-[120px] h-[320px] w-[320px] rounded-full bg-blue-200/20 blur-[100px]" />

      <Container className="relative z-10 max-w-[1480px]">

        <div className="mx-auto max-w-[1000px] text-center">

          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-slate-200
              bg-white/80
              px-5
              py-3
              shadow-lg
              backdrop-blur-xl
            "
          >
            <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />

            <span className="text-[0.88rem] font-medium tracking-[-0.02em] text-slate-700">
              {badge}
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mt-8
              text-[3.5rem]
              font-extrabold
              leading-[0.9]
              tracking-[-0.09em]
              text-slate-950
              sm:text-[2.6rem] sm:text-[3.6rem] lg:text-[4.5rem]
              lg:text-[3.4rem] sm:text-[2.6rem] sm:text-[3.6rem] lg:text-[4.5rem] lg:text-[6rem]
            "
          >
            {title}

            {highlightedText && (
              <>
                <br />

                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 bg-clip-text text-transparent">
                  {highlightedText}
                </span>
              </>
            )}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
              mx-auto
              mt-8
              max-w-[760px]
              text-[1.08rem]
              leading-[2]
              text-slate-600
              lg:text-[1.15rem]
            "
          >
            {description}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
