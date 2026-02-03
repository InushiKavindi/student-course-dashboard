import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r bg-blue-600 dark:bg-blue-900 dark:border-blue-800 md:block md:sticky md:top-0 md:h-screen md:overflow-y-auto">
      <div className="px-4 py-6">
        <nav className="flex flex-col gap-1">
          <Link href="/" className="block rounded px-3 py-2 text-sm hover:bg-blue-500 dark:hover:bg-blue-700">Home</Link>
          <Link href="/courses" className="block rounded px-3 py-2 text-sm hover:bg-blue-500 dark:hover:bg-blue-700">Courses</Link>
          <Link href="/students" className="block rounded px-3 py-2 text-sm hover:bg-blue-500 dark:hover:bg-blue-700">Students</Link>
          <Link href="/profile" className="block rounded px-3 py-2 text-sm hover:bg-blue-500 dark:hover:bg-blue-700">Profile</Link>
        </nav>
      </div>
    </aside>
  );
}
