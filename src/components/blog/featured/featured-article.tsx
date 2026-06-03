"use client";

import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { blogPosts } from "../blog-data";

export function FeaturedArticle() {
  const featured = blogPosts[0];

  return (
    <section className="relative overflow-hidden py-10 lg:py-16">

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">

        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

          {/* IMAGE */}
          <div className="group relative overflow-hidden rounded-[36px]">

            <div className="relative h-[620px] overflow-hidden rounded-[36px]">

              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
            </div>
          </div>

          {/* CONTENT */}
          <div className="max-w-[560px] lg:pl-6">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Featured Article
            </span>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <span>{featured.date}</span>
              <span>•</span>
              <span>{featured.readTime}</span>
            </div>

            <h2
              className="
                mt-7
                section-heading
                text-slate-950
                lg:text-[2.6rem] sm:text-[3.6rem] lg:text-[4.5rem]
              "
            >
              {featured.title}
            </h2>

            <p className="mt-8 body-large">
              {featured.description}
            </p>

            <button
              className="
                group/button
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-slate-950
                px-7
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white
                transition-all
                duration-300
                hover:bg-slate-800
              "
            >
              Read Article

              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
