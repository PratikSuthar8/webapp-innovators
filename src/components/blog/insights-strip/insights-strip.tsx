"use client";

export function InsightsStrip() {
  return (
    <section className="border-y border-slate-200 py-8">

      <div className="overflow-hidden">

        <div
          className="
            flex
            whitespace-nowrap
            animate-[marquee_22s_linear_infinite]
            gap-16
            text-[2rem]
            font-extrabold
            tracking-[-0.06em]
            text-slate-300
            lg:text-[3rem]
          "
        >
          <span>Design Systems</span>
          <span>AI Experiences</span>
          <span>Modern Development</span>
          <span>Editorial Interfaces</span>
          <span>Digital Storytelling</span>
          <span>Scalable Architecture</span>
        </div>

      </div>
    </section>
  );
}
