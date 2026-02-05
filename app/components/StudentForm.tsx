"use client";

import { useState } from "react";

export type StudentFormData = {
  studentId: string;
  name: string;
  email: string;
  course: string;
};

export default function StudentForm({ onSubmitted }: { onSubmitted?: (data: StudentFormData) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [course, setCourse] = useState("");
  // Field-level error messages; populated when a field is invalid
  const [errors, setErrors] = useState<{ studentId?: string; name?: string; email?: string; course?: string }>({});

  // Basic email pattern for validation (not exhaustive but user-friendly)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Name must contain only letters and spaces
  const namePattern = /^[A-Za-z\s]+$/;
  // Student ID: exactly 2 uppercase letters followed by 4 digits (e.g. AB1234)
  const studentIdPattern = /^[A-Z]{2}[0-9]{4}$/;

  // Validate current form values and return errors by field
  function validate(values: { studentId: string; name: string; email: string; course: string }) {
    const next: { studentId?: string; name?: string; email?: string; course?: string } = {};
    if (!values.studentId.trim()) {
      next.studentId = "Student ID is required";
    } else if (!studentIdPattern.test(values.studentId.trim())) {
      next.studentId = "Student ID must be 2 uppercase letters followed by 4 digits (e.g. AB1234)";
    }
    if (!values.name.trim()) {
      next.name = "Name is required";
    } else if (values.name.trim().length < 2) {
      next.name = "Name must be at least 2 characters";
    } else if (!namePattern.test(values.name.trim())) {
      next.name = "Only letters and spaces are allowed";
    }

    if (!values.email.trim()) {
      next.email = "Email is required";
    } else if (!emailPattern.test(values.email.trim())) {
      next.email = "Enter a valid email address";
    }

    if (!values.course.trim()) {
      next.course = "Course is required";
    } else if (values.course.trim().length < 3) {
      next.course = "Course must be at least 3 characters";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = { studentId, name, email, course };
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    alert(`Student added: ${name} (${course}) — ID: ${studentId}`);
    onSubmitted?.(data);
  }

  return (
    <div className="rounded-md border border-zinc-300 bg-white p-4 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-zinc-700">Student ID</label>
        {/* Student ID: required, uppercase letters/digits, 6-10 chars */}
        <input
          type="text"
          value={studentId}
          onChange={(e) => {
            setStudentId(e.target.value.toUpperCase());
            if (errors.studentId) setErrors((prev) => ({ ...prev, studentId: undefined }));
          }}
          aria-invalid={!!errors.studentId}
          pattern="[A-Z]{2}[0-9]{4}"
          className={`mt-1 w-full rounded border px-3 py-2 shadow-sm placeholder:text-zinc-400 hover:border-zinc-600 focus:outline-none focus:ring-1 bg-white text-zinc-900 ${
            errors.studentId ? "border-red-500 focus:ring-red-300" : "border-zinc-300 focus:ring-zinc-600"
          }`}
          placeholder="e.g. AB1234"
          required
        />
        {errors.studentId && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.studentId}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-700">Name</label>
        {/* Name: required, min 2 characters, only letters and spaces */}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            const cleaned = e.target.value.replace(/[^A-Za-z\s]/g, "");
            setName(cleaned);
            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
          }}
          pattern="[A-Za-z\s]+"
          aria-invalid={!!errors.name}
          className={`mt-1 w-full rounded border px-3 py-2 shadow-sm placeholder:text-zinc-400 hover:border-zinc-600 focus:outline-none focus:ring-1 bg-white text-zinc-900 ${
            errors.name ? "border-red-500 focus:ring-red-300" : "border-zinc-300 focus:ring-zinc-600"
          }`}
          placeholder="e.g. Alice Johnson"
          required
        />
        {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
      </div>
      <div>
        {/* Email: required, must match basic email format */}
        <label className="block text-sm font-medium text-zinc-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          aria-invalid={!!errors.email}
          className={`mt-1 w-full rounded border px-3 py-2 shadow-sm placeholder:text-zinc-400 hover:border-zinc-600 focus:outline-none focus:ring-1 bg-white text-zinc-900 ${
            errors.email ? "border-red-500 focus:ring-red-300" : "border-zinc-300 focus:ring-zinc-600"
          }`}
          placeholder="e.g. alice@example.com"
          required
        />
        {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
      </div>
      <div>
        {/* Course: required, min 3 characters */}
        <label className="block text-sm font-medium text-zinc-700">Course</label>
        <input
          type="text"
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
            if (errors.course) setErrors((prev) => ({ ...prev, course: undefined }));
          }}
          aria-invalid={!!errors.course}
          className={`mt-1 w-full rounded border px-3 py-2 shadow-sm placeholder:text-zinc-400 hover:border-zinc-600 focus:outline-none focus:ring-1 bg-white text-zinc-900 ${
            errors.course ? "border-red-500 focus:ring-red-300" : "border-zinc-300 focus:ring-zinc-600"
          }`}
          placeholder="e.g. Data Structures"
          required
        />
        {errors.course && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.course}</p>}
      </div>
      <button type="submit" className="inline-flex items-center rounded bg-[#006BB0] px-4 py-2 text-sm font-medium text-white hover:bg-[#005A9A] focus:outline-none focus:ring-1 focus:ring-zinc-600">Add Student</button>
      </form>
    </div>
  );
}
