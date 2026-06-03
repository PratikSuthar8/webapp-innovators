"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@webappinnovators.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Surat, Gujarat, India",
  },
  {
    icon: Clock3,
    title: "Availability",
    value: "Mon - Sat / 10AM - 7PM",
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
    >
      {/* BADGE */}
      <div
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-slate-200
          bg-white/80
          px-5
          py-3
          shadow-lg
          backdrop-blur-xl
        "
      >
        <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />

        <span className="text-[0.88rem] font-medium tracking-[-0.02em] text-slate-700">
          CONTACT INFORMATION
        </span>
      </div>

      {/* TITLE */}
      <h2
        className="
          mt-8
          text-[3rem]
          font-extrabold
          leading-[0.9]
          tracking-[-0.08em]
          text-slate-950
          sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem]
          lg:text-[3rem] sm:text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] lg:text-[5rem]
        "
      >
        Let’s Build
        <br />

        <span className="gradient-text">
          Something
        </span>

        <br />

        Exceptional.
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-8 max-w-[520px] text-[1.05rem] leading-[2] text-slate-600">
        We create premium digital experiences,
        scalable systems, and modern products
        designed for ambitious startups and
        businesses worldwide.
      </p>

      {/* CONTACT CARDS */}
      <div className="mt-12 space-y-5">

        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                flex
                items-center
                gap-5
                rounded-[28px]
                border
                border-slate-200
                bg-white/75
                p-6
                shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                backdrop-blur-xl
              "
            >
              {/* ICON */}
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-400
                  text-white
                "
              >
                <Icon className="size-7" />
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h3 className="mt-1 text-[1.05rem] font-semibold tracking-[-0.03em] text-slate-950">
                  {item.value}
                </h3>
              </div>

              {/* ARROW */}
              <ArrowUpRight className="size-5 text-slate-400" />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
