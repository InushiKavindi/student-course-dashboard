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
      {/* Desktop table (md+) */}
      <div className="hidden md:block rounded-md border border-zinc-200 bg-white p-3 shadow-sm sm:p-4">
        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="text-left text-sm text-zinc-600">
                <th className="pb-2">Name</th>
                <th className="pb-2 hidden sm:table-cell">Email</th>
                <th className="pb-2">Course</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id} className="border-t bg-white">
                  <td className="py-3 pr-4 text-sm font-medium text-zinc-600">{s.name}</td>
                  <td className="py-3 pr-4 text-sm text-zinc-600 hidden sm:table-cell">{s.email}</td>
                  <td className="py-3 pr-4 text-sm text-zinc-600">{s.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile cards (sm and below) */}
      <div className="md:hidden space-y-3">
        {students.map((s) => (
          <div key={s.id} className="rounded-md border border-zinc-200 bg-white p-3 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-zinc-900">{s.name}</div>
                {s.email && <div className="mt-1 text-xs text-zinc-600">{s.email}</div>}
                {s.course && <div className="mt-2 text-sm text-zinc-600">{s.course}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
