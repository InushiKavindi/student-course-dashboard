"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-[#0b0b0b]/95">
        <div className="mx-auto flex w-full items-center justify-between px-4 py-4 sm:px-6">
          <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Student Dashboard</div>
          <nav className="hidden gap-3 md:flex">
            <Link href="/" className="rounded px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900">
              Home
            </Link>
            <Link href="/courses" className="rounded px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900">
              Courses
            </Link>
            <Link href="/students" className="rounded px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900">
              Students
            </Link>
            <Link href="/profile" className="rounded px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900">
              Profile
            </Link>
          </nav>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center rounded px-3 py-2 md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-900"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M3.75 5.25A.75.75 0 0 1 4.5 4.5h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 7.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 6a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {open && (
        <div className="md:hidden border-b bg-gray-100 py-4 text-zinc-900 dark:bg-zinc-900/70 dark:text-zinc-100">
          <div className="px-4">
            <div className="mb-3 text-sm uppercase tracking-wide text-zinc-300">Menu</div>
            <nav className="flex flex-col gap-2">
              <Link href="/" onClick={() => setOpen(false)} className="rounded bg-white/5 px-4 py-3 hover:bg-white/10">Home</Link>
              <Link href="/courses" onClick={() => setOpen(false)} className="rounded bg-white/5 px-4 py-3 hover:bg-white/10">Courses</Link>
              <Link href="/students" onClick={() => setOpen(false)} className="rounded bg-white/5 px-4 py-3 hover:bg-white/10">Students</Link>
              <Link href="/profile" onClick={() => setOpen(false)} className="rounded bg-white/5 px-4 py-3 hover:bg-white/10">Profile</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
