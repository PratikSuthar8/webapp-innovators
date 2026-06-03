"use client";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2),

  email: z.string().email(),

  company: z.string().optional(),

  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (
    data: FormData
  ) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Inquiry submitted successfully.");
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
      <div className="grid gap-6 md:grid-cols-2">

        {/* NAME */}
        <div>

          <label className="caption-text">
            Full Name
          </label>

          <input
            {...register("name")}
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

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">
              Please enter your name.
            </p>
          )}

        </div>

        {/* EMAIL */}
        <div>

          <label className="caption-text">
            Email Address
          </label>

          <input
            {...register("email")}
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

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              Please enter valid email.
            </p>
          )}

        </div>

      </div>

      {/* COMPANY */}
      <div className="mt-6">

        <label className="caption-text">
          Company
        </label>

        <input
          {...register("company")}
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
          {...register("message")}
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

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">
            Please add more details.
          </p>
        )}

      </div>

      {/* CTA */}
      <button
        disabled={isSubmitting}
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
        {isSubmitting
          ? "Submitting..."
          : "Send Inquiry"}
      </button>

    </form>
  );
}
