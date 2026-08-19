function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = ["All", "Frontend", "Design", "AI","Favorites"];

  return (
 <div className="mb-8 flex flex-wrap gap-3">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        selectedCategory === category
          ? "bg-indigo-500 text-white"
          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
      }`}
    >
      {category}
    </button>
  ))}
</div>
  );
}

export default CategoryFilter;