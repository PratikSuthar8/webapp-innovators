"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container/container";

import { techStack } from "./tech-data";

export function TechStack() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[100px] h-[320px] w-[320px] rounded-full bg-cyan-200/20 blur-[100px]" />

      <Container className="relative z-10 max-w-[1480px]">

        {/* TOP */}
        <div className="mx-auto max-w-[950px] text-center">

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
              TECHNOLOGY STACK
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
            Built With
            <br />

            <span className="gradient-text">
              Modern Technologies.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-[760px] text-[1.08rem] leading-[2] text-slate-600">
            We leverage modern frameworks, scalable
            infrastructure, and immersive technologies
            to create high-performance digital products
            for ambitious businesses worldwide.
          </p>
        </div>

        {/* TECH GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {techStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
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
                "
              >
                {/* GLOW */}
                <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-cyan-200/10 blur-[90px]" />

                <div className="relative z-10">

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

                  {/* NAME */}
                  <h3 className="mt-8 text-[2rem] font-extrabold leading-[1] tracking-[-0.06em] text-slate-950">
                    {tech.name}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-[1rem] leading-[2] text-slate-600">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
