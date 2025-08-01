"use client";

export default function Layout({ children }) {
  return (
    <>
      <style jsx global>{`
        header,
        footer {
          display: none !important;
        }
      `}</style>
      <div className="h-fix flex min-h-screen w-full items-center justify-center bg-[#EFF2F7]">
        <div className="h-fix flex w-full items-center justify-center">{children}</div>
      </div>
    </>
  );
}
