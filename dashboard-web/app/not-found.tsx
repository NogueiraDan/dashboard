import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col  items-center justify-center text-black font-medium px-6 py-8">
      <h1 className="text-3xl font-bold">Essa página não existe</h1>
      <Link href="/">Voltar para home</Link>
    </main>
  );
}
