"use client";

import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";

import { VeloraCommerce } from "@/components/mockups/velora-commerce";

export default function VeloraCommercePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#f8f5f1]">

        {/* HERO */}
        <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">

          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">

            <div className="max-w-[1100px]">

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#9ca3af]
                "
              >
                Luxury Commerce Experience
              </span>

              <h1
                className="
                  mt-8
                  text-[4rem]
                  font-extrabold
                  leading-[0.9]
                  tracking-[-0.08em]
                  text-[#111827]
                  sm:text-[5rem]
                  lg:text-[7rem]
                "
              >
                Velora Commerce
              </h1>

              <p
                className="
                  mt-10
                  max-w-[720px]
                  text-[1.08rem]
                  leading-[2]
                  tracking-[-0.02em]
                  text-[#6b7280]
                "
              >
                Editorial commerce platform designed
                to merge immersive storytelling with
                premium luxury shopping experiences.
              </p>

            </div>

          </div>
        </section>

        {/* MOCKUP */}
        <section className="pb-20 lg:pb-32">

          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">

            <VeloraCommerce />

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
