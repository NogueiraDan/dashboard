import type { Metadata } from "next";
import { checkAuth, getBrands, getCategories } from "@/lib/actions";
import NewProductForm from "@/components/new-product-form";

export const metadata: Metadata = {
  title: "Cadastro de Produto",
  description: "Plataforma de gerenciamento de produtos",
};

export default async function Page() {
  await checkAuth();
  const categories = await getCategories();
  const brands = await getBrands();
  return (
    <main className="p-5 flex flex-col gap-3 h-full">
      <h1 className="text-3xl font-bold my-3">Cadastro de produto</h1>
      <NewProductForm categories={categories} brands={brands} />
    </main>
  );
}
