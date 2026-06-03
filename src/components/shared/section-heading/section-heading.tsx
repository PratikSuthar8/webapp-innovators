import { cn } from "@/lib/utils";

interface SectionHeadingProps {
	badge?: string;
	title: string;
	description?: string;
	align?: "left" | "center";
	className?: string;
}

export function SectionHeading({
	badge,
	title,
	description,
	align = "center",
	className,
}: SectionHeadingProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-4",
				align === "center"
					? "items-center text-center"
					: "items-start text-left",
				className,
			)}
		>
			{badge && (
				<span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-medium text-sky-700">
					{badge}
				</span>
			)}

			<h2
				className="
          max-w-4xl
          text-3xl
          font-bold
          leading-tight
          tracking-tight
          text-slate-900
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
        "
			>
				{title}
			</h2>

			{description && (
				<p
					className="
            max-w-2xl
            text-base
            leading-relaxed
            text-slate-600
            sm:text-lg
            md:text-xl
          "
				>
					{description}
				</p>
			)}
		</div>
	);
}
