"use client";

import { useState } from "react";

export type StudentFormData = {
  name: string;
  email: string;
  course: string;
};

export default function StudentForm({ onSubmitted }: { onSubmitted?: (data: StudentFormData) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = { name, email, course };
    alert(`Student added: ${name || "(no name)"} (${course || "no course"})`);
    onSubmitted?.(data);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-400"
          placeholder="e.g. Alice Johnson"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-400"
          placeholder="e.g. alice@example.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">Course</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="mt-1 w-full rounded border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-400"
          placeholder="e.g. Data Structures"
          required
        />
      </div>
      <button type="submit" className="inline-flex items-center rounded bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-600">Add Student</button>
    </form>
  );
}
