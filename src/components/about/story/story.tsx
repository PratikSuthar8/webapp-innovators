"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container/container";

import { storyTimeline } from "./story-data";

export function Story() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* GLOW */}
      <div className="absolute left-[-150px] top-[100px] h-[320px] w-[320px] rounded-full bg-cyan-200/20 blur-[100px]" />

      <Container className="relative z-10 max-w-[1480px]">

        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

          {/* LEFT */}
          <div className="lg:sticky lg:top-32 h-fit">

            {/* BADGE */}
            <div
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
                OUR JOURNEY
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-8
                text-[3rem]
                font-extrabold
                leading-[0.9]
                tracking-[-0.08em]
                text-slate-950
                lg:text-[2.6rem] sm:text-[3.6rem] lg:text-[4.5rem]
              "
            >
              Building
              <br />

              <span className="gradient-text">
                Digital
              </span>

              <br />

              Excellence.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[420px] text-[1.05rem] leading-[2] text-slate-600">
              Our journey is driven by innovation,
              creativity, and a passion for building
              premium digital products that shape
              the future of modern businesses.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* LINE */}
            <div className="absolute left-[38px] top-0 hidden h-full w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent lg:block" />

            <div className="space-y-10">

              {storyTimeline.map((item, index) => (
                <motion.div
                  key={item.year}
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
                    y: -6,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[36px]
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

                  <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-start">

                    {/* YEAR */}
                    <div className="relative flex items-center gap-5 lg:min-w-[180px]">

                      {/* DOT */}
                      <div className="relative z-10 hidden h-5 w-5 rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-cyan-400 shadow-lg lg:block" />

                      <span className="text-[3rem] font-extrabold leading-none tracking-[-0.08em] text-slate-200 lg:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem]">
                        {item.year}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3 className="text-[2rem] font-bold tracking-[-0.06em] text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-[700px] text-[1rem] leading-[2] text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
