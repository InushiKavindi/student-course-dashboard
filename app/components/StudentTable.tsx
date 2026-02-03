type Student = {
  id: number | string;
  name: string;
  email?: string;
  course?: string;
};

type StudentTableProps = {
  students: Student[];
};

export default function StudentTable({ students }: StudentTableProps) {
  return (
    <div className="mt-6">
      {/* Card wrapper for the table */}
      <div className="rounded-md border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-4">
        {/* Single responsive table; hide Email on mobile */}
        <div className="w-full overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left text-sm text-zinc-600 dark:text-zinc-400">
              <th className="pb-2">Name</th>
              <th className="pb-2 hidden sm:table-cell">Email</th>
              <th className="pb-2">Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t bg-white dark:bg-zinc-900">
                <td className="py-3 pr-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">{s.name}</td>
                <td className="py-3 pr-4 text-sm text-zinc-600 dark:text-zinc-400 hidden sm:table-cell">{s.email}</td>
                <td className="py-3 pr-4 text-sm text-zinc-600 dark:text-zinc-400">{s.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
