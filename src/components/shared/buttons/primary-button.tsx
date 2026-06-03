"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
	href?: string;
	children: React.ReactNode;
	className?: string;
}

export function PrimaryButton({
	href = "/",
	children,
	className,
}: PrimaryButtonProps) {
	return (
		<motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
			<Link
				href={href}
				className={cn(
					"group relative inline-flex items-center justify-center gap-2 overflow-hidden  rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 over:shadow-cyan-500/30 sm:px-7 sm:py-3.5 sm:text-base",
					className,
				)}
			>
				<span className="relative z-10">{children}</span>

				<ArrowRight
					className="
            relative
            z-10
            size-4
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
				/>

				<div
					className="
            absolute
            inset-0
            bg-white/10
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
				/>
			</Link>
		</motion.div>
	);
}
