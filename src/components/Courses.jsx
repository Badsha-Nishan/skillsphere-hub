import CoursesCard from "./CoursesCard";

const Courses = async () => {
  const res = await fetch("https://skillsphere-hub.vercel.app/data.json");
  const courses = await res.json();
  const popularCourse = courses.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div>
      <h2 className="text-3xl text-center mt-14 font-bold">Popular Courses</h2>
      <p className="text-gray-500 mt-2 text-center mb-6">
        Explore our most popular courses loved by thousands of learners
        worldwide.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {popularCourse.map((course) => (
          <CoursesCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
