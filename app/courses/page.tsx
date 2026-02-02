import CourseCard from "../components/CourseCard";

export default function CoursesPage() {
  const sampleCourses = [
    { id: 1, title: "Intro to Programming", desc: "Learn the basics of programming.", meta: "12 students" },
    { id: 2, title: "Data Structures", desc: "Understand common data structures.", meta: "8 students" },
    { id: 3, title: "Databases", desc: "Intro to relational databases.", meta: "10 students" },
  ];

  return (
    <div>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Courses</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">Browse available courses below.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sampleCourses.map((c) => (
            <CourseCard key={c.id} id={c.id} title={c.title} desc={c.desc} meta={c.meta} />
          ))}
        </div>
      </main>
    </div>
  );
}
