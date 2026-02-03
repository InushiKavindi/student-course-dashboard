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
  const [isAddOpen, setIsAddOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return students;
    return students.filter((s) =>
      [s.name, s.email || "", s.course || ""].some((v) => v.toLowerCase().includes(q))
    );
  }, [query, students]);

  return (
    <div>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Students</h1>
          <div className="flex w/full items-center gap-2 sm:w-auto">
            <SearchBar
              className="w-full sm:w-80"
              placeholder="Search students..."
              value={query}
              onChange={setQuery}
              onFilterClick={() => alert("Filters coming soon")}
            />
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

        <StudentTable students={filtered} />
        <Modal open={isAddOpen} onClose={() => setIsAddOpen(false)} title="Add Student">
          <StudentForm onSubmitted={() => setIsAddOpen(false)} />
        </Modal>
      </main>
    </div>
  );
}
