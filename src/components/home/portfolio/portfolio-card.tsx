"use client";

import Link from "next/link";

import Image from "next/image";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  slug: string;

  title: string;

  category: string;

  description: string;

  image: string;

  stats: string[];

  size?: "large" | "small";

  theme?: "cyan" | "neutral" | "blue";

  index: number;
}

export function PortfolioCard({
  slug,
  title,
  category,
  description,
  image,
  stats,
  size = "small",
  theme = "neutral",
}: PortfolioCardProps) {
  const isLarge = size === "large";

  const overlayStyles = {
    cyan:
      "from-cyan-500/20 via-transparent to-slate-950/80",

    neutral:
      "from-black/10 via-transparent to-black/70",

    blue:
      "from-blue-500/20 via-transparent to-slate-950/80",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <Link
        href={`/portfolio/${slug}`}
        className="group block"
      >
        <article
          className={`
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-slate-200/70
            bg-white
            shadow-[0_10px_40px_rgba(15,23,42,0.04)]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-[0_20px_80px_rgba(15,23,42,0.08)]
            ${
              isLarge
                ? "min-h-[520px] lg:min-h-[620px] lg:min-h-[760px]"
                : "min-h-[520px] lg:min-h-[620px]"
            }
          `}
        >

          {/* IMAGE */}
          <div className="absolute inset-0 overflow-hidden">

            <Image
              src={image}
              alt={title}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.04]
              "
            />

            <div
              className={`
                absolute
                inset-0
                bg-gradient-to-b
                ${overlayStyles[theme]}
              `}
            />

          </div>

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-between
              p-5 lg:p-8
              lg:p-6 lg:p-10
            "
          >

            {/* TOP */}
            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  backdrop-blur-xl
                "
              >
                <div className="h-2 w-2 rounded-full bg-cyan-400" />

                <span
                  className="
                    text-[0.72rem]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white
                  "
                >
                  {category}
                </span>
              </div>

            </div>

            {/* BOTTOM */}
            <div>

              {/* METRICS */}
              <div className="mb-8 flex flex-wrap gap-3">

                {stats.map((stat) => (
                  <div
                    key={stat}
                    className="
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      px-4
                      py-2
                      text-xs
                      font-medium
                      tracking-[-0.02em]
                      text-white
                      backdrop-blur-xl
                    "
                  >
                    {stat}
                  </div>
                ))}

              </div>

              {/* TITLE */}
              <h3
                className={`
                  font-extrabold
                  leading-[0.92]
                  tracking-[-0.08em]
                  text-white
                  ${
                    isLarge
                      ? "text-[2.4rem] sm:text-[3.2rem] lg:text-[2rem] lg:text-[2.8rem] lg:text-[4rem]"
                      : "text-[2rem] lg:text-[2.8rem]"
                  }
                `}
              >
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-[1rem]
                  leading-[1.9]
                  text-white/70
                "
              >
                {description}
              </p>

              {/* CTA */}
              <div
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white
                "
              >
                View Case Study

                <ArrowUpRight
                  className="
                    size-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </div>

            </div>

          </div>

        </article>
      </Link>
    </motion.div>
  );
}
