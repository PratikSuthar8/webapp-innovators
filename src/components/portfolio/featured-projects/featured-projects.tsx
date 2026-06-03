"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/container/container";

import { portfolioProjects } from "../portfolio-data";

export function FeaturedProjects() {
  const featured = portfolioProjects.slice(0, 2);

  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BG */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-cyan-200/20 blur-[100px]" />

      <Container className="relative z-10 max-w-[1480px]">

        {/* TOP */}
        <div className="mx-auto max-w-[900px] text-center">

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
              FEATURED PROJECTS
            </span>
          </div>

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
            Selected Digital
            <br />

            <span className="gradient-text">
              Experiences.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[1.08rem] leading-[2] text-slate-600">
            A curated collection of premium digital products,
            scalable ecosystems, and immersive user experiences.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="mt-20 space-y-20">

          {featured.map((project, index) => (
            <motion.div
              key={project.title}
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
                duration: 0.8,
              }}
              className={`
                grid
                gap-10
                lg:items-center
                ${
                  index % 2 === 0
                    ? "lg:grid-cols-[1.15fr_0.85fr]"
                    : "lg:grid-cols-[0.85fr_1.15fr]"
                }
              `}
            >
              {/* IMAGE */}
              <div
                className={`
                  ${
                    index % 2 !== 0
                      ? "lg:order-2"
                      : ""
                  }
                `}
              >
                <motion.div
                  whileHover={{
                    y: -8,
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
                  <div className="relative h-[520px] overflow-hidden rounded-[30px]">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

                    <div
                      className="
                        absolute
                        left-8
                        top-8
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-white
                        backdrop-blur-xl
                      "
                    >
                      {project.category}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CONTENT */}
              <div
                className={`
                  ${
                    index % 2 !== 0
                      ? "lg:order-1"
                      : ""
                  }
                `}
              >
                <div className="max-w-[580px]">

                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Featured Project
                  </span>

                  <h3 className="mt-6 text-[3rem] font-extrabold leading-[0.92] tracking-[-0.08em] text-slate-950 lg:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem]">
                    {project.title}
                  </h3>

                  <p className="mt-8 text-[1.05rem] leading-[2] text-slate-600">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.tags.map((tag) => (
                      <div
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-slate-200
                          bg-white
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-slate-700
                        "
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <button
                    className="
                      group/button
                      mt-10
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-gradient-to-r
                      from-blue-600
                      to-cyan-500
                      px-7
                      py-4
                      text-[0.95rem]
                      font-semibold
                      text-white
                      shadow-[0_20px_60px_rgba(14,165,233,0.25)]
                    "
                  >
                    View Project

                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
