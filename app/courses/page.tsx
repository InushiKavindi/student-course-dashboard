export default function CoursesPage() {
  const sampleCourses = [
    { id: 1, title: "Intro to Programming", desc: "Learn the basics of programming." },
    { id: 2, title: "Data Structures", desc: "Understand common data structures." },
    { id: 3, title: "Databases", desc: "Intro to relational databases." },
  ];

  return (
    <div>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Courses</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">Browse available courses below.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sampleCourses.map((c) => (
            <article key={c.id} className="rounded border bg-white p-4 shadow-sm dark:bg-zinc-900">
              <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">{c.title}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{c.desc}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
