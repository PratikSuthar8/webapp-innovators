"use client";

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">

      {/* ORB 1 */}
      <div
        className="
          absolute
          left-[-120px]
          top-[10%]
          h-[280px]
          w-[280px]
          rounded-full
          bg-cyan-300/10
          blur-[100px]
        "
      />

      {/* ORB 2 */}
      <div
        className="
          absolute
          right-[-120px]
          top-[30%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-300/10
          blur-[120px]
        "
      />

      {/* ORB 3 */}
      <div
        className="
          absolute
          bottom-[-120px]
          left-[20%]
          h-[260px]
          w-[260px]
          rounded-full
          bg-cyan-200/10
          blur-[100px]
        "
      />
    </div>
  );
}
