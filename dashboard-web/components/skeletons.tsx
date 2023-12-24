// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function OverviewSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 gap-3 mb-4 h-auto shadow-sm flex justify-between`}
    >
      <div className="flex items-center justify-center truncate rounded-xl bg-gray-200 px-4 py-8 w-[25%] h-[130px]"></div>
      <div className="flex items-center justify-center truncate rounded-xl bg-gray-200 px-4 py-8 w-[25%] h-[130px]"></div>
      <div className="flex items-center justify-center truncate rounded-xl bg-gray-200 px-4 py-8 w-[25%] h-[130px]"></div>
      <div className="flex items-center justify-center truncate rounded-xl bg-gray-200 px-4 py-8 w-[25%] h-[130px]"></div>
    </div>
  );
}
