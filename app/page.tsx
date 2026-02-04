import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-semibold text-zinc-900">
          Welcome to the Student Course Dashboard
        </h1>
        <p className="mt-4 text-zinc-600">
          Use the navigation to view Courses, Students, or your Profile.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/courses" className="rounded bg-sky-600 px-4 py-2 text-white">View Courses</Link>
          <Link href="/students" className="rounded border px-4 py-2 text-zinc-600">View Students</Link>
        </div>
      </main>
    </div>
  );
}
