type CourseCardProps = {
  id: number | string;
  title: string;
  code?: string;
  desc?: string;
};

export default function CourseCard({ id, title, code, desc }: CourseCardProps) {
  return (
    <article className="rounded border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-zinc-900">{title}</h3>
          {desc && <p className="mt-2 text-sm text-zinc-400">{desc}</p>}
        </div>
        {code && (
          <div className="ml-4">
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-medium text-[#006BB0]">
              {code}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
