"use client";

import Image from "next/image";

import {
  ArrowRight,
  Heart,
  ShoppingBag,
} from "lucide-react";

export function VeloraCommerce() {
  return (
    <div
      className="
        overflow-hidden
        rounded-[36px]
        border
        border-[#e7e2db]
        bg-[#f6f1eb]
        shadow-[0_30px_120px_rgba(15,23,42,0.06)]
      "
    >
      {/* TOPBAR */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-[#e7e2db]
          px-6
          py-5
        "
      >
        <div className="flex items-center gap-10">

          <h3
            className="
              text-[1.2rem]
              font-bold
              tracking-[-0.06em]
              text-[#1f2937]
            "
          >
            Velora
          </h3>

          <nav className="hidden gap-8 md:flex">

            {[
              "Collections",
              "Editorial",
              "Journal",
              "About",
            ].map((item) => (
              <button
                key={item}
                className="
                  text-sm
                  tracking-[-0.02em]
                  text-[#6b7280]
                  transition-colors
                  duration-300
                  hover:text-[#111827]
                "
              >
                {item}
              </button>
            ))}

          </nav>

        </div>

        <div className="flex items-center gap-4">

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#1f2937]
            "
          >
            <Heart className="size-5" />
          </button>

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#1f2937]
              text-white
            "
          >
            <ShoppingBag className="size-5" />
          </button>

        </div>

      </div>

      {/* HERO */}
      <div className="grid lg:grid-cols-[0.45fr_0.55fr]">

        {/* LEFT */}
        <div
          className="
            flex
            flex-col
            justify-between
            p-8
            lg:p-14
          "
        >
          <div>

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#9ca3af]
              "
            >
              Spring / Summer 2026
            </p>

            <h2
              className="
                mt-8
                text-[3.2rem]
                font-extrabold
                leading-[0.9]
                tracking-[-0.08em]
                text-[#111827]
                lg:text-[5rem]
              "
            >
              Modern luxury for contemporary living.
            </h2>

            <p
              className="
                mt-8
                max-w-[520px]
                text-[1rem]
                leading-[2]
                tracking-[-0.02em]
                text-[#6b7280]
              "
            >
              Editorial commerce experience crafted
              for premium fashion storytelling and
              immersive digital shopping journeys.
            </p>

          </div>

          {/* CTA */}
          <div className="mt-14 flex items-center gap-6">

            <button
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#111827]
                px-7
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white
              "
            >
              Explore Collection

              <ArrowRight className="size-5" />
            </button>

            <span
              className="
                text-sm
                uppercase
                tracking-[0.18em]
                text-[#9ca3af]
              "
            >
              Crafted Editorially
            </span>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative min-h-[680px] overflow-hidden">

          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2200&auto=format&fit=crop"
            alt="Velora"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* FLOATING PRODUCT */}
          <div
            className="
              absolute
              bottom-8
              left-8
              right-8
              rounded-[28px]
              border
              border-white/20
              bg-white/10
              p-6
              backdrop-blur-xl
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-white/60
                  "
                >
                  Featured Piece
                </p>

                <h3
                  className="
                    mt-3
                    text-[1.6rem]
                    font-bold
                    tracking-[-0.06em]
                    text-white
                  "
                >
                  Oversized Wool Coat
                </h3>

              </div>

              <div className="text-right">

                <p className="text-sm text-white/60">
                  Starting at
                </p>

                <h4
                  className="
                    mt-2
                    text-[1.5rem]
                    font-bold
                    tracking-[-0.05em]
                    text-white
                  "
                >
                  $480
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* COLLECTION GRID */}
      <div
        className="
          grid
          gap-[1px]
          border-t
          border-[#e7e2db]
          bg-[#e7e2db]
          md:grid-cols-3
        "
      >

        {[
          {
            title: "Outerwear",
            image:
              "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
          },
          {
            title: "Minimal Essentials",
            image:
              "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
          },
          {
            title: "Editorial Pieces",
            image:
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
              group
              relative
              h-[360px]
              overflow-hidden
              bg-[#f6f1eb]
            "
          >

            <Image
              src={item.image}
              alt={item.title}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.04]
              "
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-6 left-6">

              <h3
                className="
                  text-[1.5rem]
                  font-bold
                  tracking-[-0.05em]
                  text-white
                "
              >
                {item.title}
              </h3>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
