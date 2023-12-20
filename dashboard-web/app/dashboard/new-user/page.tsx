import type { Metadata } from "next";
import { checkAuth } from "@/lib/actions";
import NewUserForm from "@/components/new-user-form";

export const metadata: Metadata = {
  title: "Novo Usuário",
  description: "Plataforma de gerenciamento de produtos",
};

export default async function Page() {
  await checkAuth();
  return (
    <main className="p-5 flex flex-col gap-3 h-full">
      <h1 className="text-3xl font-bold my-3">Novo Usuário</h1>
      <NewUserForm/>
    </main>
  );
}
