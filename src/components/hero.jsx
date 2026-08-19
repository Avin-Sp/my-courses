function Hero() {
  return (
    <section className="bg-slate-900 px-5 py-16 text-slate-50 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:justify-center">
        <div className="max-w-2xl text-center opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] lg:text-left">
          <p className="mb-4 font-medium text-indigo-400">
            Learn Front-end from the best instructors
          </p>

          <h2 className=" text-center mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl lg:text-left">
            Learn Without Limits
          </h2>

          <p className=" text-center mb-8 text-lg text-slate-300 lg:text-left">
            Discover courses and improve your skills with
            interactive lessons and expert guidance.
          </p>

          <div className="flex  justify-center flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-indigo-500 px-6 py-3 font-medium transition hover:bg-indigo-400">
              Explore Courses
            </button>
          </div>
        </div>

       <div className="w-full max-w-md opacity-0
    animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] rounded-3xl bg-slate-800 p-8 shadow-xl">
  <div className="space-y-4">
    <div className="group flex items-center gap-4 rounded-2xl bg-slate-700 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7 text-indigo-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20.25h6m-6 0A2.25 2.25 0 016.75 18V5.25A2.25 2.25 0 019 3h6a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0115 20.25m-6 0h6"
        />
      </svg>

      <span className="font-medium">Road Map</span>
    </div>

    <div className="group flex items-center gap-4 rounded-2xl bg-slate-700 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-7 text-indigo-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3h6m-9 8.25h12A2.25 2.25 0 0019.5 17.25V6.75A2.25 2.25 0 0017.25 4.5H6.75A2.25 2.25 0 004.5 6.75v10.5A2.25 2.25 0 006.75 19.5Z"
        />
      </svg>

      <span className="font-medium">
     Student Review
      </span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

export default Hero;