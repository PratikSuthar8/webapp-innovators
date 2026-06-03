"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Sparkles,
  Globe,
  Rocket,
  Layers3,
} from "lucide-react";

import { Container } from "@/components/shared/container/container";

const cultureItems = [
  {
    title: "Remote-First Collaboration",
    icon: Globe,
  },
  {
    title: "Design-Driven Thinking",
    icon: Sparkles,
  },
  {
    title: "Performance & Scalability",
    icon: Rocket,
  },
  {
    title: "Modern Product Systems",
    icon: Layers3,
  },
];

export function Culture() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* GLOW */}
      <div className="absolute right-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-blue-200/20 blur-[100px]" />

      <Container className="relative z-10 max-w-[1480px]">

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-slate-200
              bg-white/70
              p-4
              shadow-[0_20px_60px_rgba(15,23,42,0.06)]
              backdrop-blur-xl
            "
          >
            {/* IMAGE */}
            <div className="relative h-[620px] overflow-hidden rounded-[30px]">

              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
                alt="Workspace"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

              {/* FLOATING CARD */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-8
                  left-8
                  rounded-[28px]
                  border
                  border-white/20
                  bg-white/10
                  p-6
                  text-white
                  backdrop-blur-xl
                "
              >
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                  Creative Workspace
                </p>

                <h3 className="mt-3 text-[2rem] font-bold leading-[1] tracking-[-0.06em]">
                  Innovation
                  <br />
                  Starts Here.
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
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
                OUR CULTURE
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
                sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem]
                lg:text-[3rem] sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] lg:text-[5rem]
              "
            >
              Driven By
              <br />

              <span className="gradient-text">
                Creativity &
              </span>

              <br />

              Innovation.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[520px] text-[1.05rem] leading-[2] text-slate-600">
              We foster a modern culture focused on
              innovation, collaboration, design excellence,
              and performance-driven digital experiences
              crafted for ambitious brands worldwide.
            </p>

            {/* ITEMS */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {cultureItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-[28px]
                      border
                      border-slate-200
                      bg-white/70
                      p-5
                      shadow-lg
                      backdrop-blur-xl
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-600
                        to-cyan-400
                        text-white
                      "
                    >
                      <Icon className="size-6" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-[1rem] font-semibold leading-[1.5] tracking-[-0.03em] text-slate-950">
                      {item.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
