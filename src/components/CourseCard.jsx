function CourseCard({
  id,
  title,
  image,
  instructor,
  category,
  duration,
  rating,
  price,
  favorite,
  toggleFavorite,
}) {
  return (
    <article className="rounded-3xl bg-slate-800 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="mb-4 h-52 w-full rounded-2xl object-cover md:h-48"
        />

        <button
  onClick={() => toggleFavorite(id)}
  className="absolute right-4 top-4 rounded-full bg-slate-900/70 p-3 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-90"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={favorite ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    className={`h-6 w-6 transition-all duration-300 ${
      favorite
        ? "scale-110 text-red-700"
        : "text-white hover:text-red-200"
    }`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s-7-4.35-9.33-9.09C0.87 8.63 2.31 4.5 6.4 4.5c2.15 0 3.47 1.18 4.34 2.43C11.61 5.68 12.93 4.5 15.08 4.5c4.09 0 5.53 4.13 3.73 7.41C19 16.65 12 21 12 21z"
    />
  </svg>
         </button>
      </div>

      <div className="mb-4">
        <span className="rounded-full bg-indigo-500 px-3 py-1 text-sm text-white">
          {category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-50 md:text-xl">
        {title}
      </h3>

      <p className="mt-2 text-slate-300">
        {instructor}
      </p>

      <div className="mt-4 flex justify-between text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77 5.82 21l1.18-6.86-5-4.87 6.91-1.01L12 2z" />
          </svg>

          <span>{rating}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span>{duration}</span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-2xl font-bold text-slate-50 md:text-2xl">
          ${price}
        </span>

        <button className="group relative overflow-hidden rounded-xl bg-indigo-500 px-5 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:text-base">
          <span className="relative z-10 flex items-center gap-2">
            Enroll

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>

          <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0"></span>
        </button>
      </div>
    </article>
  );
}

export default CourseCard;