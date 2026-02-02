import Navbar from "../components/Navbar";

export default function StudentsPage() {
  const students = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Intro to Programming" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Data Structures" },
    { id: 3, name: "Carol Lee", email: "carol@example.com", course: "Databases" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Students</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">List of enrolled students.</p>

        <div className="mt-6 overflow-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="text-left text-sm text-zinc-600 dark:text-zinc-400">
                <th className="pb-2">Name</th>
                <th className="pb-2">Email</th>
                <th className="pb-2">Course</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id} className="border-t bg-white dark:bg-zinc-900">
                  <td className="py-3 pr-4">{s.name}</td>
                  <td className="py-3 pr-4 text-sm text-zinc-600 dark:text-zinc-400">{s.email}</td>
                  <td className="py-3 pr-4 text-sm text-zinc-600 dark:text-zinc-400">{s.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
