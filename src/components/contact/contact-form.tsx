"use client";

import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-slate-200
        bg-white/75
        p-8
        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        backdrop-blur-xl
        lg:p-10
      "
    >
      {/* GLOW */}
      <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-cyan-200/10 blur-[90px]" />

      <div className="relative z-10">

        {/* TITLE */}
        <h3 className="text-[2.2rem] font-extrabold leading-[1] tracking-[-0.06em] text-slate-950">
          Start Your Project.
        </h3>

        <p className="mt-5 text-[1rem] leading-[2] text-slate-600">
          Tell us about your vision, project goals,
          and digital requirements.
        </p>

        {/* FORM */}
        <form className="mt-10 space-y-6">

          {/* NAME */}
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="
                h-16
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                text-slate-950
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400
                focus:ring-4
                focus:ring-cyan-100
              "
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="hello@example.com"
              className="
                h-16
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                text-slate-950
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400
                focus:ring-4
                focus:ring-cyan-100
              "
            />
          </div>

          {/* SERVICE */}
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-700">
              Service
            </label>

            <select
              className="
                h-16
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                text-slate-950
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400
                focus:ring-4
                focus:ring-cyan-100
              "
            >
              <option>Web Design</option>
              <option>Web Development</option>
              <option>Mobile Application</option>
              <option>AI Systems</option>
              <option>UI/UX Design</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-700">
              Project Details
            </label>

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-4
                text-slate-950
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400
                focus:ring-4
                focus:ring-cyan-100
              "
            />
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              flex
              h-16
              w-full
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-[1rem]
              font-semibold
              text-white
              shadow-[0_20px_60px_rgba(14,165,233,0.25)]
            "
          >
            Send Inquiry
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
