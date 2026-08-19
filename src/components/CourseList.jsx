import { useEffect, useState } from "react";

import courses from "../data/courses";

import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

function CourseList() {
  const [courseItems, setCourseItems] = useState(() => {
    const savedCourses = localStorage.getItem("courses");

    return savedCourses
      ? JSON.parse(savedCourses)
      : courses;
  });

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const toggleFavorite = (id) => {
    setCourseItems(
      courseItems.map((course) =>
        course.id === id
          ? {
              ...course,
              favorite: !course.favorite,
            }
          : course
      )
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "courses",
      JSON.stringify(courseItems)
    );
  }, [courseItems]);

  const filteredCourses = courseItems.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : selectedCategory === "Favorites"
        ? course.favorite
        : course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-slate-900 px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-slate-50">
          Popular Courses
        </h2>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              image={course.image}
              instructor={course.instructor}
              category={course.category}
              duration={course.duration}
              rating={course.rating}
              price={course.price}
              favorite={course.favorite}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p className="mt-8 text-center text-slate-400">
            No courses found.
          </p>
        )}
      </div>
    </section>
  );
}

export default CourseList;