"use client";

export function Newsletter() {
  return (
    <section className="py-14 lg:py-24 lg:py-20 lg:py-32">

      <div className="mx-auto max-w-[900px] px-5 text-center">

        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Newsletter
        </span>

        <h2
          className="
            mt-8
            section-heading
            text-slate-950
            lg:text-[3rem] sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] lg:text-[5rem]
          "
        >
          Stay ahead with
          <br />

          modern digital insights.
        </h2>

        <p className="mx-auto mt-8 max-w-[620px] body-large">
          Get curated articles on design, development,
          AI systems, and premium digital experiences.
        </p>

        {/* FORM */}
        <div className="mx-auto mt-12 flex max-w-[620px] flex-col gap-4 sm:flex-row">

          <input
            type="email"
            placeholder="Enter your email"
            className="
              h-16
              flex-1
              rounded-full
              border
              border-slate-200
              bg-white
              px-6
              text-slate-950
              outline-none
            "
          />

          <button
            className="
              h-16
              rounded-full
              bg-slate-950
              px-8
              text-sm
              font-semibold
              uppercase
              tracking-[0.16em]
              text-white
              transition-colors
              duration-300
              hover:bg-slate-800
            "
          >
            Subscribe
          </button>

        </div>
      </div>
    </section>
  );
}
