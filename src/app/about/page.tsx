import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";

import { CTA } from "@/components/home/cta/cta";

import { PageHero } from "@/components/shared/page-hero/page-hero";

import { Story } from "@/components/about/story/story";
import { Team } from "@/components/about/team/team";
import { WhyUs } from "@/components/about/why-us/why-us";
import { Culture } from "@/components/about/culture/culture";

export default function AboutPage() {
	return (
		<>
			<Navbar />

			<main className="overflow-hidden">
				{/* HERO */}
				<PageHero
					badge="ABOUT WEBAPP INNOVATORS"
					title="Crafting Modern"
					highlightedText="Digital Experiences."
					description="
            We are a modern digital agency focused on creating
            premium websites, scalable platforms, and immersive
            digital products designed for ambitious startups
            and businesses worldwide.
          "
				/>

				{/* INTRO */}
				<section className="pb-20 lg:pb-32">
					<div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
						<div
							className="
                rounded-[40px]
                border
                border-slate-200
                bg-white/70
                p-10
                shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                backdrop-blur-xl
                lg:p-16
              "
						>
							<h2 className="text-[2.8rem] font-extrabold tracking-[-0.08em] text-slate-950 lg:text-[4rem]">
								Building Future-Ready
								<span className="gradient-text">
									{" "}
									Digital Ecosystems
								</span>
							</h2>

							<p className="mt-8 max-w-[900px] text-[1.08rem] leading-[2] text-slate-600">
								At WebApp Innovators, we combine strategy,
								design, technology, and innovation to create
								impactful digital products that help
								businesses scale faster in the modern digital
								era.
							</p>

							<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
								{[
									["50+", "Projects Delivered"],
									["25+", "Global Clients"],
									["6+", "Years Experience"],
									["99%", "Client Satisfaction"],
								].map(([value, label]) => (
									<div
										key={label}
										className="
                      rounded-[28px]
                      border
                      border-slate-200
                      bg-white
                      p-8
                      shadow-lg
                    "
									>
										<h3 className="text-[3rem] font-extrabold tracking-[-0.08em] text-slate-950">
											{value}
										</h3>

										<p className="mt-2 text-slate-500">
											{label}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* STORY */}
				<Story />

				{/* TEAM */}
				<WhyUs />

        <Team />

        <Culture />

				{/* CTA */}
				<CTA />
			</main>

			<Footer />
		</>
	);
}
