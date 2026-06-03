"use client";

import Link from "next/link";

import { ArrowRight, Sparkles } from "lucide-react";

import { motion } from "framer-motion";

export function Hero() {
	return (
		<section
			className="
        relative
        overflow-hidden
        pt-16
        pb-2
        lg:pt-20
        lg:pb-6
      "
		>
			{/* BACKGROUND */}
			<div className="absolute inset-0 bg-[#f8fbff]" />

			{/* GRADIENTS */}
			<div className="absolute left-[-180px] top-[5%] h-[420px] w-[420px] rounded-full bg-cyan-100 blur-[120px]" />

			<div className="absolute right-[-220px] top-[10%] h-[460px] w-[460px] rounded-full bg-blue-100 blur-[140px]" />

			{/* GRID */}
			<div
				className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:72px_72px]
        "
			/>

			<div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-4 md:px-4 lg:px-10 xl:px-14">
				<div className="grid items-center gap-5 lg:grid-cols-[0.46fr_0.54fr]">
					{/* LEFT */}
					<div className="max-w-[640px]">
						{/* BADGE */}
						<motion.div
							initial={{
								opacity: 0,
								y: 20,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 0.6,
							}}
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
                shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                backdrop-blur-xl
              "
						>
							<div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />

							<span className="caption-text">
								Premium Digital Product Studio
							</span>
						</motion.div>

						{/* HEADING */}
						<motion.h1
							initial={{
								opacity: 0,
								y: 30,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 0.7,
								delay: 0.1,
							}}
							className="
                mt-10
                text-[3rem]
                font-extrabold
                leading-[0.82]
                tracking-[-0.09em]
                text-slate-950
                sm:text-[4.4rem]
                lg:text-[5.6rem]
              "
						>
							We Design
							<br />
							<span
								className="
                  bg-gradient-to-r
                  from-[#2563eb]
                  via-[#0ea5e9]
                  to-[#22d3ee]
                  bg-clip-text
                  text-transparent
                "
							>
								Modern Brands
							</span>
							<br />
							That Feel
							<br />
							Premium.
						</motion.h1>

						{/* DESCRIPTION */}
						<motion.p
							initial={{
								opacity: 0,
								y: 20,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 0.7,
								delay: 0.2,
							}}
							className="
                body-large
                mt-10
                max-w-[520px]
                text-slate-600
              "
						>
							We create premium websites, scalable platforms, and
							immersive digital experiences crafted for ambitious
							startups and modern businesses.
						</motion.p>

						{/* CTA */}
						<motion.div
							initial={{
								opacity: 0,
								y: 20,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 0.7,
								delay: 0.3,
							}}
							className="mt-8 flex flex-wrap gap-5"
						>
							<Link
								href="/contact"
								className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#2563eb]
                  to-[#06b6d4]
                  px-4
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white
                  shadow-[0_20px_60px_rgba(37,99,235,0.25)]
                "
							>
								Start Project
								<ArrowRight
									className="
                    size-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
								/>
							</Link>

							<Link
								href="/portfolio"
								className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-slate-200
                  bg-white/80
                  px-4
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-slate-950
                  shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                  backdrop-blur-xl
                "
							>
								View Portfolio
							</Link>
						</motion.div>

						{/* STATS */}
						<motion.div
							initial={{
								opacity: 0,
								y: 20,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 0.7,
								delay: 0.4,
							}}
							className="
                mt-8
                grid
                grid-cols-3
                gap-3
                border-t
                border-slate-200
                pt-5
              "
						>
							{[
								{
									value: "50+",
									label: "Projects",
								},
								{
									value: "25+",
									label: "Clients",
								},
								{
									value: "99%",
									label: "Satisfaction",
								},
							].map((item) => (
								<div key={item.label}>
									<h3
										className="
                      text-[1.1rem]
                      font-extrabold
                      tracking-[-0.08em]
                      text-slate-950
                    "
									>
										{item.value}
									</h3>

									<p
										className="
                      mt-2
                      text-sm
                      uppercase
                      tracking-[0.16em]
                      text-slate-500
                    "
									>
										{item.label}
									</p>
								</div>
							))}
						</motion.div>
					</div>

					{/* RIGHT */}
					<motion.div
						initial={{
							opacity: 0,
							scale: 0.96,
							y: 40,
						}}
						animate={{
							opacity: 1,
							scale: 1,
							y: 0,
						}}
						transition={{
							duration: 0.8,
						}}
						className="relative"
					>
						{/* MAIN MOCKUP */}
						<div
							className="
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-[#0f172a]/10
                bg-[#020817]
                p-5
                shadow-[0_40px_120px_rgba(15,23,42,0.18)]
              "
						>
							{/* TOPBAR */}
							<div
								className="
                  flex
                  items-center
                  justify-between
                  rounded-[20px]
                  border
                  border-white/5
                  bg-[#071224]
                  px-4
                  py-4
                "
							>
								<div className="flex items-center gap-5">
									<div
										className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#2563eb]
                      to-[#22d3ee]
                      text-lg
                      font-bold
                      text-white
                    "
									>
										WI
									</div>

									<div
										className="
                      h-5
                      w-[180px]
                      rounded-full
                      bg-white/5
                    "
									/>
								</div>

								<div className="flex items-center gap-3">
									<div className="h-3 w-3 rounded-full bg-cyan-400" />
									<div className="h-3 w-3 rounded-full bg-blue-400" />
									<div className="h-3 w-3 rounded-full bg-white/20" />
								</div>
							</div>

							{/* CONTENT */}
							<div className="mt-5 grid gap-5 lg:grid-cols-[88px_1fr]">
								{/* SIDEBAR */}
								<div
									className="
                    flex
                    flex-col
                    gap-5
                    rounded-[24px]
                    border
                    border-white/5
                    bg-[#071224]
                    p-5
                  "
								>
									{[1, 2, 3, 4, 5].map((item) => (
										<div
											key={item}
											className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/[0.04]
                      "
										>
											<div className="h-3 w-3 rounded-full bg-cyan-400" />
										</div>
									))}
								</div>

								{/* MAIN */}
								<div className="space-y-4">
									{/* STATS */}
									<div className="grid grid-cols-3 gap-5">
										{["48K", "24K", "99%"].map(
											(stat) => (
												<div
													key={
														stat
													}
													className="
                          rounded-[24px]
                          border
                          border-white/5
                          bg-[#071224]
                          p-3
                        "
												>
													<div
														className="
                            h-12
                            w-12
                            rounded-2xl
                            bg-gradient-to-br
                            from-[#2563eb]
                            to-[#22d3ee]
                          "
													/>

													<h3
														className="
                            mt-8
                            text-[2rem]
                            font-extrabold
                            tracking-[-0.08em]
                            text-white
                          "
													>
														{
															stat
														}
													</h3>

													<p className="mt-1 text-sm text-white/40">
														Analytics
													</p>
												</div>
											),
										)}
									</div>

									{/* CHART */}
									<div
										className="
                      rounded-[20px]
                      border
                      border-white/5
                      bg-[#071224]
                      p-3
                    "
									>
										<div className="flex items-start justify-between">
											<div>
												<h3
													className="
                            text-[1.1rem]
                            font-bold
                            tracking-[-0.06em]
                            text-white
                          "
												>
													Platform
													Analytics
												</h3>

												<p className="mt-2 text-white/40">
													Real-time
													operational
													overview
												</p>
											</div>

											<div
												className="
                          rounded-full
                          border
                          border-cyan-400/20
                          bg-cyan-400/10
                          px-4
                          py-2
                        "
											>
												<span
													className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-cyan-300
                          "
												>
													Live
												</span>
											</div>
										</div>

										{/* GRAPH */}
										<div className="mt-8 flex h-[170px] items-end gap-5">
											{[
												80, 130, 110,
												180, 150, 220,
												190,
											].map(
												(
													height,
													index,
												) => (
													<div
														key={
															index
														}
														className="
                              flex-1
                              rounded-t-[24px]
                              bg-gradient-to-t
                              from-[#2563eb]
                              to-[#22d3ee]
                            "
														style={{
															height,
														}}
													/>
												),
											)}
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* FLOATING CARD */}
						<div
							className="
                absolute
                right-[20px]
                top-[90px]
                hidden
                w-[190px]
                rounded-[20px]
                border
                border-slate-200
                bg-white/90
                p-3
                shadow-[0_20px_80px_rgba(15,23,42,0.08)]
                backdrop-blur-xl
                xl:block
              "
						>
							<div
								className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-[30px]
                  bg-gradient-to-br
                  from-[#2563eb]
                  to-[#22d3ee]
                  text-white
                "
							>
								<Sparkles className="size-8" />
							</div>

							<h3
								className="
                  mt-8
                  text-[1.1rem]
                  font-extrabold
                  leading-[1]
                  tracking-[-0.07em]
                  text-slate-950
                "
							>
								AI Automation
							</h3>

							<p className="mt-5 text-[1rem] leading-[1.6] text-slate-600">
								Smart workflows designed to save teams hours
								every week.
							</p>

							<div className="mt-5 flex items-end gap-2">
								{[35, 40, 32, 55, 50].map((height, index) => (
									<div
										key={index}
										className="
                        w-full
                        rounded-full
                        bg-gradient-to-t
                        from-[#2563eb]
                        to-[#22d3ee]
                      "
										style={{
											height,
										}}
									/>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
