function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative mb-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors duration-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.2-5.2m0 0A7.5 7.5 0 1 0 5.2 5.2a7.5 7.5 0 0 0 10.6 10.6Z"
        />
      </svg>

      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-2xl border border-slate-700 bg-slate-800 py-4 pl-12 pr-5 text-slate-50 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:shadow-lg"
      />
    </div>
  );
}

export default SearchBar;