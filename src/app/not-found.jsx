import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center space-y-4 py-20">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-gray-500">Page not found</p>
      <Link
        href={"/"}
        className="w-full border p-2 rounded-2xl text-white bg-linear-to-l from-[#2341b2] to-[#845af1]
                    bg-[length:200%_100%] bg-left
                    transition-all duration-200
                    hover:bg-right"
      >
        Back to Home
      </Link>
    </div>
  );
}
