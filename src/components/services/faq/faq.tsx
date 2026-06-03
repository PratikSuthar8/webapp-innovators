"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Plus,
  Minus,
} from "lucide-react";

import { Container } from "@/components/shared/container/container";

import { faqItems } from "./faq-data";

export function FAQ() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-cyan-200/20 blur-[100px]" />

      <Container className="relative z-10 max-w-[1200px]">

        {/* TOP */}
        <div className="mx-auto max-w-[900px] text-center">

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
              FREQUENTLY ASKED QUESTIONS
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
              lg:text-[3rem] sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] lg:text-[5rem]
            "
          >
            Questions?
            <br />

            <span className="gradient-text">
              We’ve Got Answers.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-[760px] text-[1.08rem] leading-[2] text-slate-600">
            Everything you need to know about our
            workflow, technologies, scalability,
            support, and digital product development.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-16 space-y-5">

          {faqItems.map((item, index) => {
            const isActive =
              activeIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white/75
                  shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                  backdrop-blur-xl
                "
              >
                {/* BUTTON */}
                <button
                  onClick={() =>
                    setActiveIndex(
                      isActive
                        ? null
                        : index
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-8
                    py-7
                    text-left
                  "
                >
                  {/* QUESTION */}
                  <h3 className="text-[1.2rem] font-semibold tracking-[-0.04em] text-slate-950 lg:text-[1.35rem]">
                    {item.question}
                  </h3>

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      min-w-[48px]
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-blue-600
                      to-cyan-400
                      text-white
                    "
                  >
                    {isActive ? (
                      <Minus className="size-5" />
                    ) : (
                      <Plus className="size-5" />
                    )}
                  </div>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <div className="px-8 pb-8 pr-20">
                        <p className="text-[1rem] leading-[2] text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
