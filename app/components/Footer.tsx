export default function Footer() {
  return (
    // Footer: compact on mobile (py-4) and comfortable on larger screens (sm:py-6)
    <footer className="border-t bg-white py-4 text-sm text-zinc-600 dark:bg-transparent dark:text-zinc-400 sm:py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-center">
          <div>© {new Date().getFullYear()} Student Course Management Dashboard</div>
        </div>
      </div>
    </footer>
  );
}
