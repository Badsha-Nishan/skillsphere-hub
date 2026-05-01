export default function Loading() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-20 py-12">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="p-4 border rounded-xl animate-pulse">
          <div className="h-40 bg-gradient-to-r from-[#2341b2]/20 to-[#845af1]/20 rounded mb-4"></div>

          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
