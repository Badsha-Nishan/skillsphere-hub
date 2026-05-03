import * as motion from "motion/react-client";
import { Card } from "@heroui/react";

const LearningTips = () => {
  return (
    <div className="py-4">
      <div className="text-center mt-14 mb-6">
        <h2 className="text-3xl font-bold">Learning Tips</h2>
        <p className="text-gray-500 mt-2">
          Boost your productivity and learn smarter with these proven techniques
        </p>
      </div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <Card className=" text-center p-4 mt-4 hover:scale-105 border transition duration-300">
          <Card.Header>
            <p className=" text-6xl py-2">⏱️</p>
            <Card.Title className="text-2xl mb-2">
              Pomodoro Technique
            </Card.Title>
            <Card.Description>
              Study for 25 minutes, then take a 5-minute break to stay focused
              and productive.
            </Card.Description>
          </Card.Header>
        </Card>
        <Card className=" text-center p-4 mt-4 hover:scale-105 border transition duration-300">
          <Card.Header>
            <p className=" text-6xl py-2">🎯</p>
            <Card.Title className="text-2xl mb-2">Set Daily Goals</Card.Title>
            <Card.Description>
              Plan small achievable goals each day to build consistency and
              motivation.
            </Card.Description>
          </Card.Header>
        </Card>
        <Card className=" text-center p-4 mt-4 hover:scale-105 border transition duration-300">
          <Card.Header>
            <p className=" text-6xl py-2">🧠</p>
            <Card.Title className="text-2xl mb-2">
              Avoid Multitasking
            </Card.Title>
            <Card.Description>
              Focus on one task at a time to improve learning efficiency and
              retention.
            </Card.Description>
          </Card.Header>
        </Card>
        <Card className=" text-center p-4 mt-4 hover:scale-105 border transition duration-300">
          <Card.Header>
            <p className=" text-6xl py-2">📘</p>
            <Card.Title className="text-2xl mb-2">
              Practice Consistently
            </Card.Title>
            <Card.Description>
              Apply what you learn through regular practice to strengthen your
              skills.
            </Card.Description>
          </Card.Header>
        </Card>
      </motion.div>
    </div>
  );
};

export default LearningTips;
