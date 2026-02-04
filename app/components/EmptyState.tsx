import { ReactNode } from "react";
import clsx from "clsx";

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
};

export default function EmptyState({ title, description, icon, actionLabel, onAction, className }: EmptyStateProps) {
  return (
    <div className={clsx("mt-6", className)}>
      <div className="rounded-md border border-zinc-200 bg-white p-6 text-center shadow-sm">
        <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-3">
          {icon ?? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-10 w-10 text-zinc-400 dark:text-zinc-500"
              aria-hidden
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-8 3h8a1 1 0 011 1v8h-9V7zm-6 0h4v10H5a1 1 0 01-1-1V8a1 1 0 011-1z" />
            </svg>
          )}
          <h2 className="text-lg font-semibold text-zinc-600">{title}</h2>
          {description && (
            <p className="max-w-prose text-sm text-zinc-400">{description}</p>
          )}
          {actionLabel && onAction && (
            <button
              type="button"
              onClick={onAction}
              className="mt-2 inline-flex items-center rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600"
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
