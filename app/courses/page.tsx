"use client";

import { useMemo, useState } from "react";
import CourseCard from "../components/CourseCard";
import EmptyState from "../components/EmptyState";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import CourseForm from "../components/CourseForm";

export default function CoursesPage() {
  const sampleCourses = [
    { id: 1, title: "Intro to Programming", code: "CS101", desc: "Learn the basics of programming." },
    { id: 2, title: "Data Structures", code: "CS201", desc: "Understand common data structures." },
    { id: 3, title: "Databases", code: "CS220", desc: "Intro to relational databases." },
    { id: 4, title: "Algorithms", code: "CS301", desc: "Design and analyze algorithms." },
    { id: 5, title: "Operating Systems", code: "CS330", desc: "Core concepts of operating systems." },
    { id: 6, title: "Computer Networks", code: "CS320", desc: "Principles of computer networking." },
  ];

  const [query, setQuery] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);

  const filteredCourses = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return sampleCourses;
    return sampleCourses.filter((c) =>
      [c.title, c.code].some((v) => (v || "").toLowerCase().includes(q))
    );
  }, [query, sampleCourses]);

  return (
    <div>
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold text-zinc-900">Courses</h1>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <SearchBar
              className="w-full sm:w-80"
              placeholder="Search courses..."
              value={query}
              onChange={setQuery}
            />
            <button
              type="button"
              onClick={() => setIsAddOpen(true)}
              className="inline-flex shrink-0 items-center rounded bg-white border border-[#006BB0] px-3 py-2 text-sm font-medium text-[#006BB0] hover:bg-[#f8fbff] focus:outline-none focus:ring-2 focus:ring-[#006BB0]"
            >
              Add Course
            </button>
          </div>
        </div>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">Browse available courses below.</p>

        {filteredCourses.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((c) => (
              <CourseCard key={c.id} id={c.id} title={c.title} code={c.code} desc={c.desc} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No courses found"
            description="Try adjusting your search or filters."
            actionLabel="Add Course"
            onAction={() => setIsAddOpen(true)}
          />
        )}
        <Modal open={isAddOpen} onClose={() => setIsAddOpen(false)} title="Add Course">
          <CourseForm onSubmitted={() => setIsAddOpen(false)} />
        </Modal>
      </main>
    </div>
  );
}
