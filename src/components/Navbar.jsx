import { Link, Button } from "@heroui/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40">
      {/* Basic */}
      <nav className=" w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex flex-col sm:flex-row h-16 items-center container mx-auto justify-between px-6">
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
          <ul className="flex items-center gap-4">
            <li>
              <Link className="no-underline hover:underline" href="/courses">
                {" "}
                Courses{" "}
              </Link>
            </li>
            <li>
              <Link className="no-underline hover:underline" href="/profile">
                {" "}
                My Profile{" "}
              </Link>
            </li>
            <li>
              <Link className="no-underline" href="/login">
                {" "}
                <Button variant="outline" className="border border-blue-800">
                  Login
                </Button>{" "}
              </Link>
            </li>
            <li>
              <Link className="no-underline" href="/register">
                {" "}
                <Button
                  className="w-full border bg-gradient-to-l from-[#2341b2] to-[#845af1]
           bg-[length:200%_100%] bg-left
           transition-all duration-200
           hover:bg-right"
                >
                  Register
                </Button>{" "}
              </Link>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
