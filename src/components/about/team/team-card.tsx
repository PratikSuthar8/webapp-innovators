"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { ArrowUpRight, Globe } from "lucide-react";

interface TeamCardProps {
	name: string;
	role: string;
	image: string;
	description: string;
	index: number;
}

export function TeamCard({ name, role, image, description, index }: TeamCardProps) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 40,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			viewport={{ once: true }}
			transition={{
				duration: 0.7,
				delay: index * 0.12,
			}}
			whileHover={{
				y: -8,
			}}
			className="
        group
        relative
        overflow-hidden
        rounded-[38px]
        border
        border-slate-200
        bg-white/70
        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-200
        hover:shadow-[0_25px_100px_rgba(14,165,233,0.12)]
      "
		>
			{/* IMAGE */}
			<div className="relative h-[420px] overflow-hidden">
				<Image
					src={image}
					alt={name}
					fill
					className="object-cover transition-transform duration-700 group-hover:scale-105"
				/>

				{/* OVERLAY */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

				{/* FLOAT ICON */}
				<motion.button
					whileHover={{
						scale: 1.08,
					}}
					className="
            absolute
            right-6
            top-6
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            text-white
            backdrop-blur-xl
          "
				>
					<Globe className="size-5" />
				</motion.button>

				{/* NAME */}
				<div className="absolute bottom-8 left-8 right-8">
					<span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl">
						{role}
					</span>

					<h3 className="mt-5 text-[2.4rem] font-extrabold leading-[0.92] tracking-[-0.08em] text-white">
						{name}
					</h3>
				</div>
			</div>

			{/* CONTENT */}
			<div className="relative overflow-hidden p-8">
				{/* GLOW */}
				<div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-cyan-200/10 blur-[90px]" />

				<div className="relative z-10">
					<p className="text-[1rem] leading-[2] text-slate-600">
						{description}
					</p>

					{/* BUTTON */}
					<button
						className="
              group/button
              mt-8
              inline-flex
              items-center
              gap-2
              text-[0.96rem]
              font-semibold
              text-blue-600
            "
					>
						View Profile
						<ArrowUpRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
					</button>
				</div>
			</div>
		</motion.div>
	);
}
