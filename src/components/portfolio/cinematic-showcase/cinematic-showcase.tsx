"use client";

import Image from "next/image";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowUpRight } from "lucide-react";

import { portfolioProjects } from "../portfolio-data";

gsap.registerPlugin(ScrollTrigger);

export function CinematicShowcase() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    sectionRefs.current.forEach((section) => {
      if (!section) return;

      const image =
        section.querySelector(".parallax-image");

      const content =
        section.querySelector(".parallax-content");

      // SUBTLE CINEMATIC PARALLAX
      if (image) {
        gsap.set(image, {
          scale: 1.06,
        });

        const imageTween = gsap.fromTo(
          image,
          {
            y: -12,
          },
          {
            y: 12,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );

        if (imageTween.scrollTrigger) {
          triggers.push(imageTween.scrollTrigger);
        }
      }

      // CONTENT REVEAL
      if (content) {
        const contentTween = gsap.fromTo(
          content,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: content,
              start: "top 85%",
              once: true,
            },
          }
        );

        if (contentTween.scrollTrigger) {
          triggers.push(contentTween.scrollTrigger);
        }
      }
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-10 lg:py-20">

      {/* ATMOSPHERE */}
      <div className="absolute left-[-220px] top-[10%] h-[360px] w-[360px] rounded-full bg-cyan-200/15 blur-[90px]" />

      <div className="absolute right-[-220px] top-[40%] h-[360px] w-[360px] rounded-full bg-blue-200/15 blur-[90px]" />

      <div className="space-y-28 lg:space-y-36">

        {portfolioProjects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="relative"
          >
            <div className="mx-auto max-w-[1680px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">

              <div
                className={`
                  grid
                  items-center
                  gap-12
                  lg:gap-16
                  ${
                    index % 2 === 0
                      ? "lg:grid-cols-[1.08fr_0.92fr]"
                      : "lg:grid-cols-[0.92fr_1.08fr]"
                  }
                `}
              >

                {/* IMAGE SIDE */}
                <div
                  className={`
                    ${
                      index % 2 !== 0
                        ? "lg:order-2"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[40px]
                      border
                      border-white/40
                      bg-white/50
                      p-4
                      shadow-[0_15px_50px_rgba(15,23,42,0.08)]
                      backdrop-blur-md
                    "
                  >
                    {/* IMAGE WRAPPER */}
                    <div className="relative h-[58vh] min-h-[460px] overflow-hidden rounded-[30px]">

                      {/* PARALLAX IMAGE */}
                      <div className="parallax-image absolute inset-0">

                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          priority={index === 0}
                          className="object-cover"
                        />
                      </div>

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/70" />

                      {/* CATEGORY */}
                      <div
                        className="
                          absolute
                          left-7
                          top-7
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          px-5
                          py-3
                          text-sm
                          font-medium
                          text-white
                          backdrop-blur-md
                        "
                      >
                        {project.category}
                      </div>

                      {/* TITLE */}
                      <div className="absolute bottom-8 left-8 right-8">

                        <h2
                          className="
                            text-[2.7rem]
                            font-extrabold
                            leading-[0.9]
                            tracking-[-0.08em]
                            text-white
                            sm:text-[3.5rem]
                            lg:text-[2.6rem] sm:text-[3.6rem] lg:text-[4.5rem]
                          "
                        >
                          {project.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTENT SIDE */}
                <div
                  className={`
                    parallax-content
                    ${
                      index % 2 !== 0
                        ? "lg:order-1"
                        : ""
                    }
                  `}
                >
                  <div className="max-w-[600px]">

                    {/* LABEL */}
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                      Featured Experience
                    </span>

                    {/* HEADING */}
                    <h3
                      className="
                        mt-7
                        text-[3rem]
                        font-extrabold
                        leading-[0.9]
                        tracking-[-0.08em]
                        text-slate-950
                        sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem]
                        lg:text-[3rem] sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] lg:text-[5rem]
                      "
                    >
                      Designed
                      <br />

                      <span className="gradient-text">
                        For Modern
                      </span>

                      <br />

                      Businesses.
                    </h3>

                    {/* DESCRIPTION */}
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
                            bg-white/80
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-slate-700
                            shadow-md
                            backdrop-blur-md
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
                        text-[0.96rem]
                        font-semibold
                        text-white
                        shadow-[0_15px_50px_rgba(14,165,233,0.22)]
                      "
                    >
                      Explore Project

                      <ArrowUpRight className="size-5 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
