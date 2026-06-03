"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container/container";

import { whyUsItems } from "./why-us-data";

export function WhyUs() {
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
      <div className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-cyan-200/20 blur-[100px]" />

      <Container className="relative z-10 max-w-[1480px]">

        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT */}
          <div className="lg:sticky lg:top-32 h-fit">

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
                WHY CHOOSE US
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
              Why Ambitious
              <br />

              Brands
              <span className="gradient-text">
                {" "}Choose Us.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[480px] text-[1.05rem] leading-[2] text-slate-600">
              We combine strategy, creativity, innovation,
              and technology to build premium digital
              experiences designed for long-term growth
              and scalability.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-6 md:grid-cols-2">

            {whyUsItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    delay: index * 0.1,
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
                    lg:p-10
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

                    {/* TITLE */}
                    <h3 className="mt-8 text-[1.8rem] font-bold leading-[1] tracking-[-0.06em] text-slate-950">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-[1rem] leading-[2] text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
