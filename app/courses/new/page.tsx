"use client";

import Link from "next/link";
import CourseForm from "../../components/CourseForm";

export default function NewCoursePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Add Course</h1>
        <Link href="/courses" className="rounded border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900">Back to Courses</Link>
      </div>

      <CourseForm />
    </main>
  );
}
