import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const CourseDetailsCard = ({ item }) => {
  const {
    id,
    title,
    image,
    instructor,
    duration,
    rating,
    level,
    description,
    category,
  } = item;
  return (
    <div>
      <Card className="border my-4">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-7">
            <div>
              <Image
                className="rounded-md"
                src={image}
                width={500}
                height={500}
                alt={title}
              ></Image>
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="font-semibold text-xl">{title}</h2>
              </div>
              <Separator orientation="" />
              <p>{description}</p>
              <div className="flex items-center gap-2">
                <p className="font-semibold">Instructor:</p>
                <p>{instructor}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">Category:</p>
                <p>{category}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">Duration:</p>
                <p>{duration}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">Level:</p>
                <p>{level}</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="font-semibold">Rating:</p>
                <p className="text-yellow-500">
                  <FaStar />
                </p>
                <p className="text-yellow-500">
                  <FaStar />
                </p>
                <p className="text-yellow-500">
                  <FaStar />
                </p>
                <p className="text-yellow-500">
                  <FaStar />
                </p>
                <p className="text-yellow-500">
                  <FaStar />
                </p>
                <p>{rating}</p>
              </div>

              <Link href={`/courses`}>
                <Button variant="secondary" className={"w-full"}>
                  See another course
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
      <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
      <ul className="space-y-3">
        <li className="p-3 border rounded-lg">Introduction to the Course</li>
        <li className="p-3 border rounded-lg">HTML & CSS Basics</li>
        <li className="p-3 border rounded-lg">JavaScript Fundamentals</li>
        <li className="p-3 border rounded-lg">React Basics</li>
        <li className="p-3 border rounded-lg">API & Backend Introduction</li>
        <li className="p-3 border rounded-lg">Final Project & Deployment</li>
      </ul>
    </div>
  );
};

export default CourseDetailsCard;
