"use client";

import { ReactNode, useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center p-4" onClick={onClose}>
        <div
          role="dialog"
          aria-modal="true"
          className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-900"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            {title ? (
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{title}</h2>
            ) : (
              <span />
            )}
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="rounded p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            >
              ✕
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
