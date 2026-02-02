"use client";

import { useMemo, useState } from "react";
import StudentTable from "../components/StudentTable";
import SearchBar from "../components/SearchBar";

export default function StudentsPage() {
  const students = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Intro to Programming" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Data Structures" },
    { id: 3, name: "Carol Lee", email: "carol@example.com", course: "Databases" },
  ];

  const [query, setQuery] = useState("");

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
          <SearchBar
            className="w-full sm:w-80"
            placeholder="Search students..."
            value={query}
            onChange={setQuery}
            onFilterClick={() => alert("Filters coming soon")}
          />
        </div>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">List of enrolled students.</p>

        <StudentTable students={filtered} />
      </main>
    </div>
  );
}
