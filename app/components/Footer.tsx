export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white py-6 text-sm text-zinc-600 dark:bg-transparent dark:text-zinc-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <div>© {new Date().getFullYear()} Student Dashboard</div>
          <div>Built with Next.js</div>
        </div>
      </div>
    </footer>
  );
}
