"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container/container";

import { processSteps } from "./process-data";

export function Process() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* GLOW */}
      <div className="absolute right-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-blue-200/20 blur-[100px]" />

      <Container className="relative z-10 max-w-[1480px]">

        {/* TOP */}
        <div className="mx-auto mb-16 max-w-[950px] text-center lg:mb-24">

          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
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
              OUR PROCESS
            </span>
          </motion.div>

          {/* TITLE */}
          <h2
            className="
              mt-8
              text-[3rem]
              font-extrabold
              leading-[0.9]
              tracking-[-0.08em]
              text-slate-950
              sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem]
              lg:text-[5.5rem]
            "
          >
            How We Build
            <br />

            <span className="gradient-text">
              Digital Excellence.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-[760px] text-[1.08rem] leading-[2] text-slate-600">
            Our workflow combines strategy, innovation,
            design, and engineering to create scalable
            digital ecosystems focused on performance,
            user experience, and business growth.
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent lg:block" />

          <div className="space-y-10">

            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
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
                className={`
                  relative
                  flex
                  justify-${index % 2 === 0 ? "start" : "end"}
                `}
              >
                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    relative
                    w-full
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
                    lg:w-[48%]
                    lg:p-10
                  "
                >
                  {/* GLOW */}
                  <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-cyan-200/10 blur-[90px]" />

                  <div className="relative z-10">

                    {/* NUMBER */}
                    <span className="text-[3rem] sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] lg:text-[5rem] font-extrabold leading-none tracking-[-0.1em] text-slate-200 lg:text-[3.4rem] sm:text-[2.6rem] sm:text-[3.6rem] lg:text-[4.5rem] lg:text-[6rem]">
                      {step.number}
                    </span>

                    {/* TITLE */}
                    <h3 className="mt-6 text-[2rem] font-extrabold leading-[1] tracking-[-0.06em] text-slate-950">
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-[1rem] leading-[2] text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* DOT */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    hidden
                    h-5
                    w-5
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border-4
                    border-white
                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-400
                    shadow-lg
                    lg:block
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
