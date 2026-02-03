type CourseCardProps = {
  id: number | string;
  title: string;
  code?: string;
  desc?: string;
};

export default function CourseCard({ id, title, code, desc }: CourseCardProps) {
  return (
    <article className="rounded border bg-white p-4 shadow-sm dark:bg-zinc-900">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">{title}</h3>
          {desc && <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>}
        </div>
        {code && (
          <div className="ml-4">
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {code}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
