"use client";

import { useSearchParams } from "next/navigation";
import Loading from "../components/Loading";
import ErrorState from "../components/ErrorState";

import { useMemo, useState, useEffect } from "react";
import StudentTable from "../components/StudentTable";
import EmptyState from "../components/EmptyState";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import StudentForm from "../components/StudentForm";

export default function StudentsPage() {
  const students = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Intro to Programming" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Data Structures" },
    { id: 3, name: "Carol Lee", email: "carol@example.com", course: "Databases" },
    { id: 4, name: "Daniel Green", email: "daniel.green@example.com", course: "Databases" },
    { id: 5, name: "Eva Martinez", email: "eva.martinez@example.com", course: "Operating Systems" },
    { id: 6, name: "Frank Nelson", email: "frank.nelson@example.com", course: "Networks" },
    { id: 7, name: "Grace Kim", email: "grace.kim@example.com", course: "Algorithms" },
    { id: 8, name: "Hector Alvarez", email: "hector.alvarez@example.com", course: "Databases" },
    { id: 9, name: "Ivy Zhao", email: "ivy.zhao@example.com", course: "Intro to Programming" },
    { id: 10, name: "Jack Turner", email: "jack.turner@example.com", course: "Operating Systems" },
  ];

  const [query, setQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  // Pagination
  const [page, setPage] = useState(1);
  const pageSize = 5;

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

  // Reset to first page when filters/search change
  useEffect(() => setPage(1), [query, selectedCourse]);

  const totalPages = Math.max(1, Math.ceil(finalList.length / pageSize));
  const paginated = finalList.slice((page - 1) * pageSize, page * pageSize);

//   //to test loading and error states
//   const params = useSearchParams();
// const demo = params?.get("demo");
// if (demo === "loading") return <Loading />;
// if (demo === "error")
//   return (
//     <ErrorState
//       title="Demo error"
//       description="This is a demo error state for testing."
//       actionLabel="Retry"
//       onAction={() => window.location.reload()}
//     />
//   );

  return (
    <div>
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-12">
        {/* Header row: wraps on small screens; space-between on larger */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold text-zinc-900">Students</h1>
          {/* Controls: wrap to new line on mobile for responsiveness */}
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            <SearchBar
              className="w-full sm:flex-1 sm:min-w-60 md:max-w-md"
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
                className="w-full rounded-md border border-zinc-300 bg-white px-2 py-2 text-sm text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-1 focus:ring-zinc-500 sm:w-auto"
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
              className="inline-flex shrink-0 items-center rounded bg-white border border-[#006BB0] px-3 py-2 text-sm font-medium text-[#006BB0] hover:bg-[#f8fbff] focus:outline-none"
            >
              Add Student
            </button>
          </div>
        </div>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">List of enrolled students.</p>
        {/* Results: show table or empty state */}
        {finalList.length > 0 ? (
          <>
            <StudentTable students={paginated} />

            {/* Pagination controls */}
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-zinc-600">Showing {(page - 1) * pageSize + 1} - {Math.min(page * pageSize, finalList.length)} of {finalList.length}</div>
              <nav className="flex items-center gap-2" aria-label="Pagination">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  aria-label="Previous page"
                  className="inline-flex items-center rounded border border-zinc-300 bg-white px-3 py-1 text-sm text-zinc-700 disabled:opacity-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* simple page numbers */}
                <div className="hidden sm:flex items-center gap-1">
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const p = i + 1;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPage(p)}
                        aria-current={page === p ? "page" : undefined}
                        className={`inline-flex items-center rounded px-3 py-1 text-sm ${page === p ? "bg-[#006BB0] text-white" : "bg-white text-zinc-700 border border-zinc-200"}`}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  aria-label="Next page"
                  className="inline-flex items-center rounded border border-zinc-300 bg-white px-3 py-1 text-sm text-zinc-700 disabled:opacity-50"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </nav>
            </div>
          </>
        ) : (
          <EmptyState
            title="No students found"
            description="Try adjusting your search or course filter."
            actionLabel="Add Student"
            onAction={() => setIsAddOpen(true)}
          />
        )}
        <Modal open={isAddOpen} onClose={() => setIsAddOpen(false)} title="Add Student">
          <StudentForm onSubmitted={() => setIsAddOpen(false)} />
        </Modal>
      </main>
    </div>
  );
}
