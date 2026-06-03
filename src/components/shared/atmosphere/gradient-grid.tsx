export function GradientGrid() {
	return (
		<div
			className="
        pointer-events-none
        fixed
        inset-0
        opacity-[0.12]
      "
		>
			<div
				className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)]
          bg-[size:90px_90px]
        "
			/>
		</div>
	);
}
