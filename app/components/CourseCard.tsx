type CourseCardProps = {
  id: number | string;
  title: string;
  desc?: string;
  meta?: string;
};

export default function CourseCard({ id, title, desc, meta }: CourseCardProps) {
  return (
    <article className="rounded border bg-white p-4 shadow-sm dark:bg-zinc-900">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">{title}</h3>
          {desc && <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>}
        </div>
        {meta && <div className="ml-4 text-sm text-zinc-500 dark:text-zinc-400">{meta}</div>}
      </div>
    </article>
  );
}
