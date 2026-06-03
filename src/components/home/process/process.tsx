"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We deeply understand your business, goals, users, and digital vision before planning execution.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We create scalable product strategies, wireframes, architecture, and growth-focused planning.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Modern high-performance applications are crafted using scalable technologies and systems.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We optimize, deploy, monitor, and continuously improve your digital ecosystem for growth.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 md:px-8 xl:px-12">

        <div className="grid items-start gap-20 lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-32">

            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-slate-200
                bg-white
                px-6
                py-3
                shadow-[0_8px_30px_rgba(15,23,42,0.04)]
              "
            >
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />

              <span
                className="
                  text-[0.8rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                "
              >
                Our Process
              </span>

            </div>

            {/* HEADING */}
            <h2
              className="
                mt-10
                max-w-[720px]
                text-[4rem]
                font-black
                leading-[0.9]
                tracking-[-0.08em]
                text-slate-950
                sm:text-[5rem]
                xl:text-[5.7rem]
              "
            >
              Strategic

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
                <br />
                Digital Solutions
              </span>

              <br />
              Built To Scale.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-10
                max-w-[540px]
                text-[1.12rem]
                leading-[2]
                text-slate-600
              "
            >
              Our process combines strategy,
              design, technology, and innovation
              to create premium digital products
              that help businesses scale efficiently.
            </p>

            {/* BUTTON */}
            <button
              className="
                mt-12
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-[#2563eb]
                to-[#22d3ee]
                px-8
                py-5
                text-[1rem]
                font-semibold
                text-white
                shadow-[0_20px_60px_rgba(37,99,235,0.25)]
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              Start Your Project

              <span className="text-lg">↗</span>
            </button>

          </div>

          {/* RIGHT GRID */}
          <div className="grid gap-8 md:grid-cols-2">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[38px]
                    border
                    border-slate-200
                    bg-white/80
                    p-10
                    shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_25px_80px_rgba(14,165,233,0.10)]

                    ${
                      index % 2 !== 0
                        ? "md:translate-y-16"
                        : ""
                    }
                  `}
                >

                  {/* NUMBER */}
                  <div
                    className="
                      absolute
                      right-8
                      top-6
                      text-[5rem]
                      font-black
                      tracking-[-0.08em]
                      text-slate-100
                    "
                  >
                    {step.number}
                  </div>

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-[24px]
                      bg-gradient-to-br
                      from-[#2563eb]
                      to-[#22d3ee]
                      shadow-[0_20px_40px_rgba(37,99,235,0.22)]
                    "
                  >
                    <Icon className="size-9 text-white" />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-10
                      text-[3rem]
                      font-black
                      tracking-[-0.07em]
                      text-slate-950
                    "
                  >
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-5
                      text-[1.08rem]
                      leading-[2]
                      text-slate-600
                    "
                  >
                    {step.description}
                  </p>

                  {/* LINE */}
                  <div
                    className="
                      mt-10
                      h-[4px]
                      w-full
                      overflow-hidden
                      rounded-full
                      bg-slate-100
                    "
                  >
                    <div
                      className="
                        h-full
                        w-full
                        rounded-full
                        bg-gradient-to-r
                        from-[#2563eb]
                        to-[#22d3ee]
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
