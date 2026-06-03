"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container/container";

import { TeamCard } from "./team-card";
import { teamMembers } from "./team-data";

export function Team() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* GLOW */}
      <div className="absolute right-[-150px] top-[120px] h-[320px] w-[320px] rounded-full bg-blue-200/20 blur-[100px]" />

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
                OUR TEAM
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
                sm:text-[3.2rem]
                lg:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem]
              "
            >
              The People Behind
              <br />

              <span className="gradient-text">
                Modern Innovation.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[620px] text-[1.08rem] leading-[2] text-slate-600">
              Our team combines creativity, strategy,
              technology, and innovation to build
              premium digital products for ambitious
              brands and businesses worldwide.
            </p>
          </div>

          {/* RIGHT */}
          <div className="max-w-[420px]">
            <p className="text-[1rem] leading-[2] text-slate-500">
              We believe exceptional products are created
              by passionate people focused on design,
              scalability, and meaningful user experiences.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-6 lg:grid-cols-3">

          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              index={index}
              {...member}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
