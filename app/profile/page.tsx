export default function ProfilePage() {
  return (
    <div>
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Profile</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">User profile and settings placeholder.</p>

        <section className="mt-6 rounded border bg-white p-6 shadow-sm dark:bg-zinc-900">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">Your Info</h2>
          <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Name: Inushi Kavindi</div>
          <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Email: inushi@example.com</div>
        </section>
      </main>
    </div>
  );
}
