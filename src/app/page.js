import * as motion from "motion/react-client";
import Courses from "@/components/Courses";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            Upgrade Your Skills Today 🚀
          </motion.h1>

          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="text-gray-500 text-lg"
          >
            Learn from industry experts and build real-world projects with
            SkillSphere. Explore modern courses in development, design, and
            marketing at your own pace.
          </motion.p>

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="flex gap-4"
          >
            <Link href={"/courses"}>
              <Button variant="outline" className="border-blue-700">
                Explore Courses
              </Button>
            </Link>
            <Link href={"/login"}>
              <Button className="bg-linear-to-r from-[#2341b2] to-[#845af1] hover:bg-linear-to-r hover:from-[#845af1] hover:to-[#2341b2]">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center"
        >
          <img src="/hero.png" alt="Hero" className="w-full max-w-md" />
        </motion.div>
      </section>
      <Courses />
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </div>
  );
}
