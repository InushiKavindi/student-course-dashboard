"use client";

import { useState } from "react";

export type CourseFormData = {
  title: string;
  desc: string;
  code: string;
};

export default function CourseForm({ onSubmitted }: { onSubmitted?: (data: CourseFormData) => void }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [code, setCode] = useState("");
  // Field-level error messages; set per field when invalid
  const [errors, setErrors] = useState<{ title?: string; code?: string; desc?: string }>({});

  const codePattern = /^[A-Z]{2,4}\d{3}$/; // e.g. CS101, MATH201
  // Title must start with a letter; allow only letters, spaces and & (no numbers)
  const titlePattern = /^[A-Za-z][A-Za-z &]*$/;

  // Validate form values and return errors by field
  function validate(values: { title: string; code: string; desc: string }) {
    const next: { title?: string; code?: string; desc?: string } = {};
    if (!values.title.trim()) {
      next.title = "Title is required";
    } else if (values.title.trim().length < 3) {
      next.title = "Title must be at least 3 characters";
    } else if (!titlePattern.test(values.title.trim())) {
      next.title = "Title must start with a letter and may include letters, spaces and & (no numbers)";
    }

    if (!values.code.trim()) {
      next.code = "Course code is required";
    } else if (!codePattern.test(values.code.trim())) {
      next.code = "Use format like CS101 (2-4 letters + 3 digits)";
    }

    if (values.desc && values.desc.trim().length > 0 && values.desc.trim().length < 10) {
      next.desc = "Description must be at least 10 characters or leave blank";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Build payload and validate before submit
    const data = { title, desc, code };
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    alert(`Course added: ${title} (${code})`);
    onSubmitted?.(data);
  }

  return (
    <div className="rounded-md border border-zinc-300 bg-white p-4 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-zinc-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (errors.title) setErrors((prev) => ({ ...prev, title: undefined }));
          }}
          aria-invalid={!!errors.title}
          className={`mt-1 w-full rounded border px-3 py-2 text-zinc-900 shadow-sm placeholder:text-zinc-400 hover:border-zinc-600 focus:outline-none focus:ring-2 bg-white ${
            errors.title ? "border-red-500 focus:ring-red-300" : "border-zinc-300 focus:ring-zinc-600"
          }`}
          placeholder="e.g. Intro to Programming"
          required
        />
        {errors.title && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.title}</p>}
      </div>
      <div>
        {/* Description (optional): require min 10 chars if provided */}
        <label className="block text-sm font-medium text-zinc-700">Description</label>
        <textarea
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
            if (errors.desc) setErrors((prev) => ({ ...prev, desc: undefined }));
          }}
          aria-invalid={!!errors.desc}
          className={`mt-1 w-full rounded border px-3 py-2 text-zinc-900 shadow-sm placeholder:text-zinc-400 hover:border-zinc-600 focus:outline-none focus:ring-2 bg-white ${
            errors.desc ? "border-red-500 focus:ring-red-300" : "border-zinc-300 focus:ring-zinc-600"
          }`}
          rows={4}
          placeholder="Brief course description"
        />
        {errors.desc && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.desc}</p>}
      </div>
      <div>
        {/* Course Code: required; format 2–4 letters + 3 digits (e.g., CS101) */}
        <label className="block text-sm font-medium text-zinc-700">Course Code</label>
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value.toUpperCase());
            if (errors.code) setErrors((prev) => ({ ...prev, code: undefined }));
          }}
          aria-invalid={!!errors.code}
          className={`mt-1 w-full rounded border px-3 py-2 text-zinc-900 shadow-sm placeholder:text-zinc-400 hover:border-zinc-600 focus:outline-none focus:ring-2 bg-white ${
            errors.code ? "border-red-500 focus:ring-red-300" : "border-zinc-300 focus:ring-zinc-600"
          }`}
          placeholder="e.g. CS101"
          required
        />
        {errors.code && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.code}</p>}
      </div>
      <button type="submit" className="inline-flex items-center rounded bg-[#006BB0] px-4 py-2 text-sm font-medium text-white hover:bg-[#005A9A] focus:outline-none focus:ring-2 focus:ring-zinc-600">Add Course</button>
      </form>
    </div>
  );
}
