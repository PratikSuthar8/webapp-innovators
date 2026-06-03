"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container/container";

import { portfolioProjects } from "./portfolio-data";
import { PortfolioCard } from "./portfolio-card";

export function Portfolio() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      <div className="absolute left-[-200px] top-[200px] h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-[90px]" />

      <Container className="relative z-10 max-w-[1480px]">

        {/* TOP */}
        <div className="mb-12 lg:mb-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

          {/* LEFT */}
          <div className="max-w-[720px]">

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-lg"
            >
              <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />

              <span className="text-[0.88rem] font-medium tracking-[-0.02em] text-slate-700">
                FEATURED WORK
              </span>
            </motion.div>

            {/* TITLE */}
            <h2 className="mt-7 text-[2.8rem] sm:text-[3.2rem] lg:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-extrabold leading-[0.9] tracking-[-0.08em] text-slate-950">
              Real Products.
              <br />

              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Real Experiences.
              </span>

              <br />

              Real Impact.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[620px] text-[1.08rem] leading-[1.9] text-slate-600">
              We design and develop modern digital products,
              scalable platforms, and immersive experiences
              crafted for ambitious businesses worldwide.
            </p>
          </div>

          {/* RIGHT */}
          <div className="max-w-[420px]">
            <p className="text-[1rem] leading-[1.9] text-slate-500">
              Our work combines modern aesthetics, scalable
              technologies, and strategic product thinking
              to create impactful digital ecosystems.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LARGE PROJECT */}
          <PortfolioCard
            {...portfolioProjects[0]}
            index={0}
          />

          {/* RIGHT SIDE */}
          <div className="grid gap-6">
            <PortfolioCard
              {...portfolioProjects[1]}
              index={1}
            />

            <PortfolioCard
              {...portfolioProjects[2]}
              index={2}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
