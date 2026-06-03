"use client";

import {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  Clock3,
  Layers3,
  Sparkles,
  Users,
} from "lucide-react";

export function AureonDashboard() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-[#020817]
        p-6
        shadow-[0_30px_120px_rgba(2,8,23,0.6)]
      "
    >
      {/* ATMOSPHERE */}
      <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* TOPBAR */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-between
          border-b
          border-white/10
          pb-5
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-cyan-500/20
              text-cyan-300
            "
          >
            <BrainCircuit className="size-6" />
          </div>

          <div>

            <h3 className="text-lg font-bold tracking-[-0.04em] text-white">
              Aureon AI
            </h3>

            <p className="mt-1 text-sm text-white/50">
              Workflow Intelligence Platform
            </p>

          </div>
        </div>

        <div
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-4
            py-2
          "
        >
          <div className="h-2 w-2 rounded-full bg-cyan-400" />

          <span className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-200">
            Live Systems
          </span>
        </div>

      </div>

      {/* GRID */}
      <div className="relative z-10 mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">

        {/* LEFT */}
        <div className="space-y-6">

          {/* ANALYTICS */}
          <div
            className="
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm uppercase tracking-[0.16em] text-white/40">
                  AI Operations
                </p>

                <h3 className="mt-3 text-[3rem] font-extrabold tracking-[-0.08em] text-white">
                  94%
                </h3>

              </div>

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-500/10
                  text-cyan-300
                "
              >
                <Activity className="size-7" />
              </div>

            </div>

            {/* GRAPH */}
            <div className="mt-10 flex h-[180px] items-end gap-3">

              {[40, 80, 60, 120, 90, 150, 110].map(
                (height, index) => (
                  <div
                    key={index}
                    className="
                      flex-1
                      rounded-t-full
                      bg-gradient-to-t
                      from-cyan-500
                      to-cyan-300
                      opacity-90
                    "
                    style={{
                      height,
                    }}
                  />
                )
              )}

            </div>

          </div>

          {/* BOTTOM CARDS */}
          <div className="grid gap-6 md:grid-cols-2">

            {[
              {
                icon: Users,
                title: "Collaboration",
                value: "3.2x",
              },
              {
                icon: Clock3,
                title: "Workflow Speed",
                value: "42%",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/5
                  p-6
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/5
                    text-cyan-300
                  "
                >
                  <item.icon className="size-6" />
                </div>

                <h3 className="mt-8 text-[2.4rem] font-extrabold tracking-[-0.08em] text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div
          className="
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            p-6
          "
        >
          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm uppercase tracking-[0.16em] text-white/40">
                AI Modules
              </p>

              <h3 className="mt-3 text-[1.8rem] font-bold tracking-[-0.06em] text-white">
                Intelligent Systems
              </h3>

            </div>

            <Sparkles className="size-6 text-cyan-300" />

          </div>

          <div className="mt-10 space-y-4">

            {[
              {
                icon: Bot,
                title: "Automation Engine",
              },
              {
                icon: Layers3,
                title: "Workflow Layers",
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    text-cyan-300
                  "
                >
                  <item.icon className="size-6" />
                </div>

                <div>

                  <h4 className="font-semibold tracking-[-0.03em] text-white">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm text-white/40">
                    Enterprise AI workflow systems
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
