import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const CoursesCard = ({ course }) => {
  const { id, title, image, instructor, rating, category } = course;
  return (
    <div>
      <Card className="border my-4">
        <div className="space-y-4">
          <div className="w-full relative aspect-square">
            <Image
              className="rounded-md object-cover"
              src={image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={title}
            ></Image>
            <Chip size="sm" className="absolute top-2 right-2">
              {category}
            </Chip>
          </div>
          <div>
            <h2 className="font-semibold text-xl">{title}</h2>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <p className="font-semibold">Instructor:</p>
              <p>{instructor}</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex items-center gap-2">
              <p className="font-semibold">Rating:</p>
              <p className="text-yellow-500">
                <FaStar />
              </p>
              <p>{rating}</p>
            </div>
          </div>
          <Link href={`/courses/all-course/${id}`}>
            <Button variant="secondary" className={"w-full"}>
              View Details
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default CoursesCard;
