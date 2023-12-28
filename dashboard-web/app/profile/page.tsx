import { checkAuth, getUserInfo } from "@/lib/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil",
  description: "Profile page",
};

export default async function Page() {
  await checkAuth();
  const user = await getUserInfo();
  console.log(user);
  return (
    <>
      <main className="flex flex-col h-[100vh] w-full bg-[#fafafa] text-black font-medium px-6 py-8">
        <h1>Página de Perfil</h1>
        <p>Nome: {user.name}</p>
        <p>Perfil: {user.profile}</p>
        <p>Telefone: {user.phone}</p>
      </main>
    </>
  );
}
