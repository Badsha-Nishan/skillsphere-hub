import CourseCard from "@/components/CourseCard";
import LearningTips from "@/components/LearningTips";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Upgrade Your Skills Today 🚀
          </h1>

          <p className="text-gray-500 text-lg">
            Learn from industry experts and build real-world projects with
            SkillSphere. Explore modern courses in development, design, and
            marketing at your own pace.
          </p>

          <div className="flex gap-4">
            <Link href={"/courses"}>
              <Button variant="outline" className="border-blue-700">
                Explore Courses
              </Button>
            </Link>
            <Link href={"/login"}>
              <Button className="bg-linear-to-r from-[#2341b2] to-[#845af1]">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img src="/hero.png" alt="Hero" className="w-full max-w-md" />
        </div>
      </section>
        <CourseCard />
      <LearningTips />
      
    </div>
  );
}
