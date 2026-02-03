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
      {/* Mobile: stacked list for readability on small screens */}
      <div className="space-y-3 sm:hidden">
        {students.map((s) => (
          <div key={s.id} className="rounded border bg-white p-3 shadow-sm dark:bg-zinc-900">
            <div className="text-base font-medium text-zinc-900 dark:text-zinc-50">{s.name}</div>
            <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{s.email}</div>
            <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{s.course}</div>
          </div>
        ))}
      </div>

      {/* Desktop/tablet: tabular layout with columns */}
      <div className="hidden overflow-auto sm:block">
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
    </div>
  );
}
