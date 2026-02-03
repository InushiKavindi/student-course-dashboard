import clsx from "clsx";

type LoadingProps = {
  label?: string;
  fullScreen?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "h-5 w-5 border-2",
  md: "h-8 w-8 border-3",
  lg: "h-12 w-12 border-4",
};

export default function Loading({ label = "Loading...", fullScreen = false, size = "md", className }: LoadingProps) {
  const spinner = (
    <div
      aria-hidden
      className={clsx(
        "animate-spin rounded-full border-current border-t-transparent text-zinc-600 dark:text-zinc-300",
        sizeMap[size]
      )}
    />
  );

  if (fullScreen) {
    return (
      <div className={clsx("flex h-[50vh] w-full items-center justify-center", className)} role="status" aria-live="polite">
        <div className="flex items-center gap-3">
          {spinner}
          <span className="text-sm text-zinc-700 dark:text-zinc-300">{label}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx("inline-flex items-center gap-2", className)} role="status" aria-live="polite">
      {spinner}
      <span className="text-sm text-zinc-700 dark:text-zinc-300">{label}</span>
    </div>
  );
}
