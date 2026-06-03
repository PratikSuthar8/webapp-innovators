"use client";

import Link from "next/link";

import {
  Monitor,
  Code2,
  Sparkles,
  Smartphone,
  Layers3,
  Box,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Design",
    description:
      "Immersive premium interfaces crafted for modern digital brands.",
    icon: Monitor,
  },
  {
    title: "Development",
    description:
      "Scalable engineering systems built with modern technologies.",
    icon: Code2,
  },
  {
    title: "AI Automation",
    description:
      "Smart automation ecosystems that optimize workflows and operations.",
    icon: Sparkles,
  },
  {
    title: "Mobile Apps",
    description:
      "High-end mobile experiences designed for performance and usability.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Systems",
    description:
      "Design systems built for consistency, scalability, and clarity.",
    icon: Layers3,
  },
  {
    title: "SaaS Platforms",
    description:
      "Enterprise-grade digital platforms crafted for ambitious businesses.",
    icon: Box,
  },
];

export function Services() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* RIGHT GRADIENT */}
      <div
        className="
          absolute
          right-[-200px]
          top-[-120px]
          h-[900px]
          w-[900px]
          rounded-full
          bg-cyan-100/50
          blur-[120px]
        "
      />

      {/* CURVE LINES */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-cyan-100
          opacity-60
        "
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">

        {/* HEADER */}
        <div className="grid items-start gap-20 lg:grid-cols-[0.58fr_0.42fr]">

          {/* LEFT */}
          <div>

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
                px-6
                py-3
                shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                backdrop-blur-xl
              "
            >
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />

              <span
                className="
                  text-[0.82rem]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-slate-500
                "
              >
                Our Expertise
              </span>

            </div>

            {/* HEADING */}
            <h2
              className="
                mt-10
                max-w-[850px]
                text-[3.5rem]
                font-extrabold
                leading-[0.9]
                tracking-[-0.09em]
                text-slate-950
                sm:text-[5rem]
                lg:text-[6.3rem]
              "
            >
              Premium Digital

              <span
                className="
                  bg-gradient-to-r
                  from-[#2563eb]
                  via-[#0ea5e9]
                  to-[#22d3ee]
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}Services
              </span>

              <br />
              Built For Growth.
            </h2>

          </div>

          {/* RIGHT */}
          <div className="pt-32">

            <p
              className="
                max-w-[520px]
                text-[1.12rem]
                leading-[2]
                text-slate-600
              "
            >
              From immersive interfaces to scalable
              engineering systems, we create digital
              ecosystems designed for ambitious
              startups and modern businesses.
            </p>

          </div>

        </div>

        {/* SERVICES */}
        <div className="mt-24">

          {/* ROWS */}
          <div className="grid border-t border-slate-200 lg:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    group
                    relative
                    min-h-[280px]
                    border-b
                    border-r
                    border-slate-200
                    px-10
                    py-12
                    transition-all
                    duration-500
                    hover:bg-white/40
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-[28px]
                      bg-white/70
                      shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                      backdrop-blur-xl
                    "
                  >
                    <Icon className="size-10 text-[#2563eb]" />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-10
                      text-[2.2rem]
                      font-extrabold
                      tracking-[-0.07em]
                      text-slate-950
                    "
                  >
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-5
                      max-w-[320px]
                      text-[1rem]
                      leading-[1.9]
                      text-slate-600
                    "
                  >
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-8 flex items-center gap-3">

                    <Link
                      href="/services"
                      className="
                        text-[0.95rem]
                        font-semibold
                        text-[#2563eb]
                      "
                    >
                      Learn more
                    </Link>

                    <ArrowUpRight
                      className="
                        size-4
                        text-[#2563eb]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}
