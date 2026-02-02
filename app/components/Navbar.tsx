import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white dark:bg-[#0b0b0b] dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Student Dashboard</div>
        <nav className="flex gap-3">
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
      </div>
    </header>
  );
}
