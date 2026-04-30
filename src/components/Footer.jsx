import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="no-underline">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    width={40}
                    height={40}
                    alt="Logo"
                  ></Image>
                  <p className="font-bold text-2xl">
                    Skill{" "}
                    <span className="text-[#2341b2]">
                      Sphere <span className="text-[#845af1]">Hub</span>
                    </span>
                  </p>
                </div>
              </Link>
            </div>

            <p className="text-sm mt-2 text-gray-400">
              SkillSphere is your gateway to modern learning. Explore top
              courses, gain real-world skills, and achieve your goals with
              confidence.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Start Learning
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Choose your course today.
            </p>

            <Link className="no-underline" href="/courses">
              {" "}
              <Button className=" bg-linear-to-r from-[#2341b2] to-[#845af1]">
                Get Started
              </Button>{" "}
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} pixgen. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
