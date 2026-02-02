"use client";

import { useMemo, useState } from "react";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";
import Link from "next/link";

export default function CoursesPage() {
  const sampleCourses = [
    { id: 1, title: "Intro to Programming", desc: "Learn the basics of programming.", meta: "12 students" },
    { id: 2, title: "Data Structures", desc: "Understand common data structures.", meta: "8 students" },
    { id: 3, title: "Databases", desc: "Intro to relational databases.", meta: "10 students" },
  ];

  const [query, setQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return sampleCourses;
    return sampleCourses.filter((c) =>
      [c.title, c.desc, c.meta].some((v) => (v || "").toLowerCase().includes(q))
    );
  }, [query, sampleCourses]);

  return (
    <div>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Courses</h1>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <SearchBar
              className="w-full sm:w-80"
              placeholder="Search courses..."
              value={query}
              onChange={setQuery}
              onFilterClick={() => alert("Filters coming soon")}
            />
            <Link href="/courses/new" className="inline-flex shrink-0 items-center rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600">
              Add Course
            </Link>
          </div>
        </div>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">Browse available courses below.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((c) => (
            <CourseCard key={c.id} id={c.id} title={c.title} desc={c.desc} meta={c.meta} />
          ))}
        </div>
      </main>
    </div>
  );
}
