import StudentTable from "../components/StudentTable";

export default function StudentsPage() {
  const students = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Intro to Programming" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Data Structures" },
    { id: 3, name: "Carol Lee", email: "carol@example.com", course: "Databases" },
  ];

  return (
    <div>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Students</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">List of enrolled students.</p>

        <StudentTable students={students} />
      </main>
    </div>
  );
}
