"use client";

import Image from "next/image";

import { blogPosts } from "../blog-data";

export function EditorialGrid() {
  const posts = blogPosts.slice(1);

  return (
    <section className="relative overflow-hidden py-20 lg:py-16 lg:py-28">

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">

        {/* FILTERS */}
        <div className="mb-16 flex flex-wrap gap-6">

          {[
            "All",
            "Design",
            "Development",
            "AI",
            "Strategy",
          ].map((item) => (
            <button
              key={item}
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-500
                transition-colors
                duration-300
                hover:text-slate-950
              "
            >
              {item}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid gap-8 lg:grid-cols-2">

          {posts.map((post) => (
            <article
              key={post.title}
              className="
                group
                rounded-[32px]
                border
                border-slate-200/70
                bg-white/70
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_80px_rgba(15,23,42,0.06)]
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[26px]">

                <div className="relative h-[340px] overflow-hidden rounded-[26px]">

                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-2 pt-7">

                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3
                  className="
                    mt-5
                    section-heading
                    text-slate-950
                  "
                >
                  {post.title}
                </h3>

                <p className="mt-6 body-medium">
                  {post.description}
                </p>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
