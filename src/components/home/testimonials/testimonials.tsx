"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container/container";

import { testimonials } from "./testimonials-data";
import { TestimonialCard } from "./testimonial-card";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      <div className="absolute left-[-200px] top-[200px] h-[500px] w-[500px] rounded-full bg-cyan-200/20 blur-[90px]" />

      <div className="absolute right-[-200px] bottom-[100px] h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-[90px]" />

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
                CLIENT EXPERIENCES
              </span>
            </motion.div>

            {/* TITLE */}
            <h2 className="mt-7 text-[2.8rem] sm:text-[3.2rem] lg:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-extrabold leading-[0.9] tracking-[-0.08em] text-slate-950">
              Trusted By
              <br />

              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Modern Brands
              </span>

              <br />

              Worldwide.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[620px] text-[1.08rem] leading-[1.9] text-slate-600">
              We help ambitious startups and businesses create
              scalable digital ecosystems with premium experiences,
              modern technologies, and strategic execution.
            </p>
          </div>

          {/* RIGHT */}
          <div className="max-w-[420px]">
            <p className="text-[1rem] leading-[1.9] text-slate-500">
              Our clients trust us to transform ideas into
              modern digital products that deliver measurable
              business impact and long-term scalability.
            </p>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          {/* FEATURED */}
          <TestimonialCard
            {...testimonials[0]}
            index={0}
          />

          {/* SIDE */}
          <div className="grid gap-6">
            <TestimonialCard
              {...testimonials[1]}
              index={1}
            />

            <TestimonialCard
              {...testimonials[2]}
              index={2}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
