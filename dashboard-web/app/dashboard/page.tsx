import { Metadata } from "next";
import { Suspense } from "react";
import Overview from "@/components/overview";
import { RevenueChart } from "@/components/revenue-chart";
import RecentActivity from "@/components/recent-activity";
import { checkAuth } from "@/lib/actions";
import { OverviewSkeleton } from "@/components/skeletons";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard de usuários e produtos",
};

export default async function Page() {
  await checkAuth();
  return (
    <main className="h-full">
      <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
      <Overview />
      <Suspense fallback={<OverviewSkeleton />}></Suspense>

      <div className="flex flex-col md:flex-row w-full pt-8 gap-5 justify-between ">
        <div className="w-full">
          <RevenueChart />
        </div>
        <div className="w-full">
          <RecentActivity />
        </div>
      </div>
    </main>
  );
}
