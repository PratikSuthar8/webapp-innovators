"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Container } from "@/components/shared/container/container";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* RADIAL GLOWS */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/30 blur-[90px]" />

      <div className="absolute left-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-200/20 blur-[90px]" />

      <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-cyan-100/30 blur-[90px]" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <Container className="relative z-10 max-w-[1480px]">

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
            duration: 0.8,
          }}
          className="
            relative
            overflow-hidden
            rounded-[48px]
            border
            border-white/60
            bg-white/70
            px-8
            py-20
            text-center
            shadow-[0_40px_120px_rgba(15,23,42,0.08)]
            backdrop-blur-2xl
            lg:px-20
          "
        >
          {/* INNER GLOW */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-[90px]" />

          {/* FLOATING ELEMENTS */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              left-[8%]
              top-[18%]
              hidden
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-white/60
              bg-white/70
              shadow-xl
              backdrop-blur-xl
              lg:flex
            "
          >
            <Sparkles className="size-7 text-cyan-500" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-[18%]
              right-[10%]
              hidden
              h-20
              w-20
              rounded-full
              border
              border-white/60
              bg-gradient-to-br
              from-blue-500
              to-cyan-400
              shadow-[0_20px_60px_rgba(14,165,233,0.35)]
              lg:block
            "
          />

          {/* BADGE */}
          <div className="relative z-10 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-lg">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />

            <span className="text-[0.88rem] font-medium tracking-[-0.02em] text-slate-700">
              START YOUR DIGITAL JOURNEY
            </span>
          </div>

          {/* HEADING */}
          <h2 className="relative z-10 mx-auto mt-8 max-w-[1000px] text-[3.2rem] sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] lg:text-[3rem] sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] lg:text-[5rem] font-extrabold leading-[0.88] tracking-[-0.09em] text-slate-950">
            Let’s Build
            <br />

            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 bg-clip-text text-transparent">
              Something Extraordinary.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="relative z-10 mx-auto mt-8 max-w-[760px] text-[1.15rem] leading-[2] text-slate-600">
            We help startups, enterprises, and ambitious brands
            create modern digital products, scalable platforms,
            and premium experiences designed for growth.
          </p>

          {/* BUTTONS */}
          <div className="relative z-10 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* PRIMARY */}
            <button
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-9
                py-5
                text-[1rem]
                font-semibold
                text-white
                shadow-[0_20px_60px_rgba(14,165,233,0.35)]
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              Start Your Project

              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* SECONDARY */}
            <button
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-slate-200
                bg-white
                px-9
                py-5
                text-[1rem]
                font-semibold
                text-slate-700
                shadow-lg
                transition-all
                duration-300
                hover:border-cyan-300
                hover:text-cyan-600
              "
            >
              Book Strategy Call
            </button>
          </div>

          {/* TRUST METRICS */}
          <div className="relative z-10 mt-14 flex flex-wrap items-center justify-center gap-10 border-t border-slate-200 pt-8">

            {[
              ["50+", "Projects Delivered"],
              ["25+", "Global Clients"],
              ["99%", "Client Satisfaction"],
            ].map(([value, label]) => (
              <div key={label}>
                <h3 className="text-[2.4rem] font-bold tracking-[-0.06em] text-slate-950">
                  {value}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
