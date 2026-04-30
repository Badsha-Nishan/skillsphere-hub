import { instructors } from "@/lib/data";
import InsCard from "./InsCard";

const TopInstructors = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold">Top Instructors</h2>
        <p className="text-gray-500 mt-2">
          Learn from industry experts with real-world experience
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {instructors?.map((instructor, index) => (
          <InsCard key={index} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;
