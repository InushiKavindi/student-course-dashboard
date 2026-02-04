"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <aside className="hidden md:block md:fixed md:inset-y-0 md:left-0 w-64 shrink-0 border-r bg-[#0084D1] dark:bg-[#006bb0] dark:border-[#005c99] md:overflow-y-auto">
      <div className="px-4 py-20 h-full">
        <nav className="flex flex-col gap-1">
          <Link
            href="/"
            className={`block rounded px-3 py-2 text-sm transition-colors duration-150 ${
              isActive("/") ? "bg-white text-[#0084D1]" : "text-white hover:bg-white hover:text-[#0084D1] focus:bg-white focus:text-[#0084D1]"
            }`}
            aria-current={isActive("/") ? "page" : undefined}
          >
            Home
          </Link>

          <Link
            href="/courses"
            className={`block rounded px-3 py-2 text-sm transition-colors duration-150 ${
              isActive("/courses") ? "bg-white text-[#0084D1]" : "text-white hover:bg-white hover:text-[#0084D1] focus:bg-white focus:text-[#0084D1]"
            }`}
            aria-current={isActive("/courses") ? "page" : undefined}
          >
            Courses
          </Link>

          <Link
            href="/students"
            className={`block rounded px-3 py-2 text-sm transition-colors duration-150 ${
              isActive("/students") ? "bg-white text-[#0084D1]" : "text-white hover:bg-white hover:text-[#0084D1] focus:bg-white focus:text-[#0084D1]"
            }`}
            aria-current={isActive("/students") ? "page" : undefined}
          >
            Students
          </Link>

          <Link
            href="/profile"
            className={`block rounded px-3 py-2 text-sm transition-colors duration-150 ${
              isActive("/profile") ? "bg-white text-[#0084D1]" : "text-white hover:bg-white hover:text-[#0084D1] focus:bg-white focus:text-[#0084D1]"
            }`}
            aria-current={isActive("/profile") ? "page" : undefined}
          >
            Profile
          </Link>
        </nav>
      </div>
    </aside>
  );
}
