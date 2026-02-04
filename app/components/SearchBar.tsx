type SearchBarProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onFilterClick?: () => void;
  className?: string;
};

export default function SearchBar({ placeholder = "Search...", value, onChange, onFilterClick, className = "" }: SearchBarProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-full">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
          {/* Search icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 3.87 12.28l3.8 3.8a.75.75 0 1 0 1.06-1.06l-3.8-3.8A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clipRule="evenodd" />
          </svg>
        </span>
        <input
          aria-label="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-md border border-zinc-300 bg-white py-2 pl-10 pr-3 text-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-0 text-zinc-900"
        />
      </div>
      {onFilterClick && (
        <button
          type="button"
          aria-label="Open filters"
          onClick={onFilterClick}
          className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 hover:bg-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-600"
        >
          {/* Filter icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M3 5.25A.75.75 0 0 1 3.75 4.5h16.5a.75.75 0 0 1 .53 1.28l-6.03 6.03v5.69a.75.75 0 0 1-1.22.58l-3-2.4a.75.75 0 0 1-.28-.58v-3.29L3.22 5.78A.75.75 0 0 1 3 5.25Z" />
          </svg>
        </button>
      )}
    </div>
  );
}
