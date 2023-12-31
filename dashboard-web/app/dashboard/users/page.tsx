import type { Metadata } from "next";
import UsersTable from "@/components/user-table";
import { checkAuth, isOwner } from "@/lib/actions";

export const metadata: Metadata = {
  title: "Usuários",
  description: "Plataforma de gerenciamento de produtos",
};

export default async function Page() {
  await checkAuth();
  const owner = await isOwner();
  return (
    <main className="p-5 flex flex-col gap-3 h-full">
      <h1 className="text-3xl font-bold my-3">Usuários</h1>
      <div>
        <UsersTable isOwner={owner} />
      </div>
    </main>
  );
}
