"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container/container";

import { servicesData } from "./services-data";
import { ServiceCard } from "./service-card";

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-cyan-200/20 blur-[100px]" />

      <Container className="relative z-10 max-w-[1480px]">

        {/* TOP */}
        <div className="mb-12 lg:mb-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

          {/* LEFT */}
          <div className="max-w-[760px]">

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
                OUR CAPABILITIES
              </span>
            </motion.div>

            {/* TITLE */}
            <h2
              className="
                mt-7
                text-[2.8rem]
                font-extrabold
                leading-[0.9]
                tracking-[-0.08em]
                text-slate-950
                sm:text-[3.5rem]
                lg:text-[3rem] sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] lg:text-[5rem]
              "
            >
              Premium Digital
              <br />

              <span className="gradient-text">
                Services &
              </span>

              <br />

              Solutions.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[620px] text-[1.08rem] leading-[2] text-slate-600">
              We design and develop modern digital products,
              scalable systems, and immersive experiences
              tailored for ambitious startups and businesses.
            </p>
          </div>

          {/* RIGHT */}
          <div className="max-w-[420px]">
            <p className="text-[1rem] leading-[2] text-slate-500">
              Our expertise combines strategy, design,
              technology, and innovation to create
              future-ready digital ecosystems.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
