import ProductsList from "@/components/product-table";
import { getProducts, checkAuth } from "@/lib/actions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Plataforma de gerenciamento de produtos",
};

export default async function Page() {
  await checkAuth();
  const products = await getProducts();
  return (
    <main className="p-5 flex flex-col gap-3 h-full">
      <h1 className="text-3xl font-bold my-3">Produtos</h1>
      <ProductsList products={products} />
    </main>
  );
}
