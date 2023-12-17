import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col h-full w-full bg-[#fafafa] text-black font-medium px-6 py-8">
      <Header />
      {children}
    </main>
  );
}
