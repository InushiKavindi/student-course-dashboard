"use client";

import { useMemo, useState } from "react";
import StudentTable from "../components/StudentTable";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import StudentForm from "../components/StudentForm";

export default function StudentsPage() {
  const students = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Intro to Programming" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Data Structures" },
    { id: 3, name: "Carol Lee", email: "carol@example.com", course: "Databases" },
  ];

  const [query, setQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);

  // Text search: name-only to keep results predictable on mobile
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return students;
    return students.filter((s) => (s.name || "").toLowerCase().includes(q));
  }, [query, students]);

  // Build course dropdown options from current list
  const courseOptions = useMemo(() => {
    const set = new Set<string>();
    students.forEach((s) => { if (s.course) set.add(s.course); });
    return Array.from(set).sort();
  }, [students]);

  // Final list = name search + course dropdown filter
  const finalList = useMemo(() => {
    if (!selectedCourse) return filtered;
    return filtered.filter((s) => (s.course || "") === selectedCourse);
  }, [filtered, selectedCourse]);

  return (
    <div>
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-12">
        {/* Header row: wraps on small screens; space-between on larger */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Students</h1>
          {/* Controls: wrap to new line on mobile for responsiveness */}
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            <SearchBar
              className="w-full sm:flex-1 sm:min-w-[240px] md:max-w-md"
              placeholder="Search by name..."
              value={query}
              onChange={setQuery}
            />
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <label htmlFor="courseFilter" className="sr-only">Filter by course</label>
              <select
                id="courseFilter"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full rounded border border-zinc-300 bg-white px-2 py-2 text-sm text-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 sm:w-auto"
              >
                <option value="">All courses</option>
                {courseOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={() => setIsAddOpen(true)}
              className="inline-flex shrink-0 items-center rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600"
            >
              Add Student
            </button>
          </div>
        </div>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">List of enrolled students.</p>
        {/* Responsive table: email column hides on small screens */}
        <StudentTable students={finalList} />
        <Modal open={isAddOpen} onClose={() => setIsAddOpen(false)} title="Add Student">
          <StudentForm onSubmitted={() => setIsAddOpen(false)} />
        </Modal>
      </main>
    </div>
  );
}
