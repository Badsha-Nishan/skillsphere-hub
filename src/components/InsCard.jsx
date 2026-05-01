import { Card } from "@heroui/react";
import Image from "next/image";

const InsCard = ({ instructor }) => {
  const { name, role, image, bio } = instructor;
  return (
    <div>
      <Card className=" text-center p-4 mt-4 hover:scale-105 border transition duration-300">
        <Image
          className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
          src={image}
          alt={name}
          width={300}
          height={300}
        />
        <Card.Header>
          <Card.Title className="text-2xl mb-2">{name}</Card.Title>
          <Card.Description>{role}</Card.Description>
          <p className="text-gray-500 text-sm">{bio}</p>
        </Card.Header>
      </Card>
    </div>
  );
};

export default InsCard;
