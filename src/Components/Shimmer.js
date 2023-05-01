const Shimmer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-72">
      <div className=" w-72 xl:h-[162px] lg:h-40 md:h-40 h-28 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-xl"></div>
      <span className="w-[260px] h-[15px] bg-gray-200 dark:bg-gray-800 animate-pulse"></span>
      <span className="w-[260px] h-[15px] bg-gray-200 dark:bg-gray-800 animate-pulse"></span>
    </div>
  );
};

export default Shimmer;
