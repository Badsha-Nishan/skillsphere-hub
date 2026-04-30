import DetailsCard from "@/components/DetailsCard";
import React from "react";

const AllCoursePage = async () => {
  const res = await fetch("https://skillsphere-hub.vercel.app/data.json");
  const courses = await res.json();
  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-5">All Course</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <DetailsCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCoursePage;
