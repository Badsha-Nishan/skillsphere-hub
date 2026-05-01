import { Card } from "@heroui/react";

const TrendingCourses = async () => {
  const res = await fetch("https://skillsphere-hub.vercel.app/data.json");
  const courses = await res.json();
  const course = courses.slice(0, 3);
  return (
    <div>
      {/* Title */}
      <div className="text-center mt-14 mb-10">
        <h2 className="text-3xl font-bold">🔥 Trending Courses</h2>
        <p className="text-gray-500 mt-2">
          Most popular courses students are loving right now
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {course.map((item) => (
          <section
            key={item.id}
            className="bg-gradient-to-l rounded-2xl from-[#2341b2] to-[#845af1] text-white py-16 px-6 lg:px-20"
          >
            <Card
              key={item.id}
              className="overflow-hidden hover:scale-105 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <Card>
                <h3 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.instructor}</p>
                <p className="text-sm text-gray-500 mt-2">⭐ {item.rating}</p>
              </Card>
            </Card>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TrendingCourses;
