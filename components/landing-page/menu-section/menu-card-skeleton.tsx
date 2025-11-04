import { Skeleton } from "@/components/ui/skeleton";

interface MenuCardSkeletonProps {
  count?: number; // how many skeleton cards to show
}

const MenuCardSkeleton = ({ count = 3 }: MenuCardSkeletonProps) => {
  return (
    <div className="space-y-8">
      {Array.from({ length: count }).map((_, cardIdx) => (
        <div
          key={cardIdx}
          className="flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-4 md:items-start items-center max-w-[1440px] mx-auto mt-8 md:mt-[60px] px-4 md:px-2"
        >
          {/* Left Section */}
          <div className="w-full md:col-span-3 space-y-5 order-2 md:order-1">
            <Skeleton className="h-8 w-40 md:w-64" /> {/* title */}
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-md border border-transparent bg-[#f6f1e7]"
                >
                  <div className="flex justify-between items-center mb-2">
                    <Skeleton className="h-3 w-36 md:w-52 bg-gray-700" />
                    <Skeleton className="h-2 w-12" />
                  </div>
                  <Skeleton className="h-3 w-64 md:w-80 bg-gray-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section (image placeholder) */}
          <div className="md:col-span-2 flex justify-center items-center order-1 md:order-2 text-center">
            <Skeleton className="rounded-full h-[280px] w-[280px] md:h-[400px] md:w-[400px] bg-gray-400" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCardSkeleton;
