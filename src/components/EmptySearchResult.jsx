import React from "react";

const EmptySearchResult = () => {
  return (
    <div className="mt-6 text-center col-span-3">
      <h2 className="text-2xl text-red-500">No Course Found</h2>
      <p className="text-gray-400">Try another keyword</p>
    </div>
  );
};

export default EmptySearchResult;
