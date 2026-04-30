import DetailsCard from "./DetailsCard";

const CourseCard = async () => {
  const res = await fetch("https://skillsphere-hub.vercel.app/data.json");
  const courses = await res.json();
  const popularCourse = courses.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div>
      <p className="text-xl font-semibold">Popular Courses</p>
      <div className="grid gap-4 grid-cols-3">
        {popularCourse.map((course) => (
          <DetailsCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
