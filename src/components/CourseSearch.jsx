"use client";

import { useState } from "react";
import CoursesCard from "./CoursesCard";
import { Button } from "@heroui/react";

const CourseSearch = ({ courses }) => {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const filtered = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="px-6 lg:px-20 py-10">
      <div className="flex justify-center">
        <div className="relative w-full max-w-xl">
          {/* Input */}
          <input
            type="text"
            placeholder="Search Courses..."
            className="w-full border rounded-lg py-3 pl-4 pr-24 outline-none"
            onChange={(e) => setInput(e.target.value)}
          />

          {/* Button inside input */}
          <Button
            onClick={() => setSearch(input)}
            className="absolute top-1/2 right-1 transform -translate-y-1/2 
                 bg-gradient-to-l from-[#2341b2] to-[#845af1] bg-[length:200%_100%] bg-left
                 transition-all duration-200 hover:bg-right text-white px-4 py-2 rounded-md"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((course) => (
          <CoursesCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseSearch;
