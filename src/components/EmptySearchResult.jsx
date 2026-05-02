import * as motion from "motion/react-client";

const EmptySearchResult = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      className="mt-6 text-center col-span-3"
    >
      <h2 className="text-2xl text-red-500">No Course Found</h2>
      <p className="text-gray-400">Try another keyword</p>
    </motion.div>
  );
};

export default EmptySearchResult;
