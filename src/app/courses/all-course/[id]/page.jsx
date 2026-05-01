import CourseDetailsCard from "@/components/CourseDetailsCard";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://skillsphere-hub.vercel.app/data.json");
  const courses = await res.json();
  const expectedCourse = courses.filter((course) => course.id == id);
  return (
    <div>
      {expectedCourse.map((item) => (
        <CourseDetailsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CourseDetailsPage;
