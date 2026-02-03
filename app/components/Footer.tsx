export default function Footer() {
  return (
    <footer className="border-t bg-white py-6 text-sm text-zinc-600 dark:bg-transparent dark:text-zinc-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center">
          <div>© {new Date().getFullYear()} Student Course Management Dashboard</div>
          
        </div>
      </div>
    </footer>
  );
}
