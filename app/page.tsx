export default function Home() {
  return (
    <div>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Welcome to the Student Course Dashboard
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Use the navigation to view Courses, Students, or your Profile.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="/courses" className="rounded bg-sky-600 px-4 py-2 text-white"> 
            View Courses
          </a>
          <a href="/students" className="rounded border px-4 py-2">View Students</a>
        </div>
      </main>
    </div>
  );
}
