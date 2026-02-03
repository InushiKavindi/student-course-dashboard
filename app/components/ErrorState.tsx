import { useState } from "react";
import clsx from "clsx";

type ErrorStateProps = {
  title?: string;
  message?: string;
  error?: unknown;
  onRetry?: () => void;
  className?: string;
};

export default function ErrorState({ title = "Something went wrong", message, error, onRetry, className }: ErrorStateProps) {
  const [showDetails, setShowDetails] = useState(false);

  const details = (() => {
    if (!error) return undefined;
    if (error instanceof Error) return error.stack || error.message;
    try { return JSON.stringify(error, null, 2); } catch { return String(error); }
  })();

  return (
    <div className={clsx("mt-6", className)}>
      <div className="rounded-md border border-red-300 bg-white p-6 shadow-sm dark:border-red-600 dark:bg-zinc-900">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0 text-red-600 dark:text-red-500" aria-hidden>
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{title}</h2>
            {message && <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{message}</p>}
            <div className="mt-3 flex items-center gap-2">
              {onRetry && (
                <button
                  type="button"
                  onClick={onRetry}
                  className="inline-flex items-center rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600"
                >
                  Retry
                </button>
              )}
              {details && (
                <button
                  type="button"
                  onClick={() => setShowDetails((v) => !v)}
                  className="inline-flex items-center rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                  aria-expanded={showDetails}
                  aria-controls="error-details"
                >
                  {showDetails ? "Hide details" : "Show details"}
                </button>
              )}
            </div>
            {showDetails && details && (
              <pre id="error-details" className="mt-3 max-h-64 overflow-auto rounded bg-zinc-50 p-3 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {details}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
