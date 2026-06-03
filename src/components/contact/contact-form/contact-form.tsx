"use client";

export function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
      method="POST"
      className="
        rounded-[36px]
        border
        border-slate-200
        bg-white
        p-6
        shadow-[0_20px_80px_rgba(15,23,42,0.04)]
        lg:p-10
      "
    >

      {/* HIDDEN */}
      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      <div className="grid gap-6 md:grid-cols-2">

        {/* NAME */}
        <div>

          <label className="caption-text">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            required
            placeholder="John Carter"
            className="
              mt-3
              h-14
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-[#f8fbff]
              px-5
              outline-none
            "
          />

        </div>

        {/* EMAIL */}
        <div>

          <label className="caption-text">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="hello@company.com"
            className="
              mt-3
              h-14
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-[#f8fbff]
              px-5
              outline-none
            "
          />

        </div>

      </div>

      {/* COMPANY */}
      <div className="mt-6">

        <label className="caption-text">
          Company
        </label>

        <input
          type="text"
          name="company"
          placeholder="Your Company"
          className="
            mt-3
            h-14
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-[#f8fbff]
            px-5
            outline-none
          "
        />

      </div>

      {/* MESSAGE */}
      <div className="mt-6">

        <label className="caption-text">
          Project Overview
        </label>

        <textarea
          name="message"
          required
          placeholder="Tell us about your project..."
          className="
            mt-3
            min-h-[180px]
            w-full
            rounded-[28px]
            border
            border-slate-200
            bg-[#f8fbff]
            p-5
            outline-none
          "
        />

      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="
          mt-8
          rounded-full
          bg-slate-950
          px-8
          py-5
          text-sm
          font-semibold
          uppercase
          tracking-[0.14em]
          text-white
        "
      >
        Send Inquiry
      </button>

    </form>
  );
}
