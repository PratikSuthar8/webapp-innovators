import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        bg-[#f8fbff]
        px-6
        text-center
      "
    >
      <p className="caption-text">
        404 Error
      </p>

      <h1
        className="
          mt-6
          text-[4rem]
          font-extrabold
          tracking-[-0.08em]
          text-slate-950
          lg:text-[6rem]
        "
      >
        Page not found.
      </h1>

      <p className="body-large mt-6 max-w-[520px]">
        The page you are looking for does not
        exist or may have been moved.
      </p>

      <Link
        href="/"
        className="
          mt-10
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
        Back to Homepage
      </Link>
    </main>
  );
}
