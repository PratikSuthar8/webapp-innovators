"use client";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-32 lg:pt-44 lg:pb-16 lg:pb-28">

      {/* ATMOSPHERE */}
      <div className="absolute left-[-200px] top-[10%] h-[420px] w-[420px] rounded-full bg-cyan-100/50 blur-[120px]" />

      <div className="absolute right-[-200px] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">

        {/* LABEL */}
        <div className="flex items-center gap-3">

          <div className="h-2.5 w-2.5 rounded-full bg-slate-950" />

          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
            Insights & Journal
          </span>
        </div>

        {/* TITLE */}
        <div className="mt-10 max-w-[1200px]">

          <h1
            className="
              section-heading
              text-slate-950
              sm:text-[3rem] sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] lg:text-[5rem]
              lg:text-[3.8rem] sm:text-[3rem] sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] lg:text-[5rem] lg:text-[7rem]
            "
          >
            Ideas shaping
            <br />

            the future of
            <br />

            digital experiences.
          </h1>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-12 max-w-[520px]">

          <p className="body-large">
            Exploring design systems, scalable development,
            AI products, storytelling, and modern digital
            experiences for ambitious brands.
          </p>
        </div>
      </div>
    </section>
  );
}
