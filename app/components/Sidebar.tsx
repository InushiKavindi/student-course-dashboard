import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r bg-white dark:bg-[#071018] dark:border-zinc-800 md:block">
      <div className="px-4 py-6">
        <nav className="flex flex-col gap-1">
          <Link href="/" className="block rounded px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900">Home</Link>
          <Link href="/courses" className="block rounded px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900">Courses</Link>
          <Link href="/students" className="block rounded px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900">Students</Link>
          <Link href="/profile" className="block rounded px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900">Profile</Link>
        </nav>
      </div>
    </aside>
  );
}
