import { Metadata } from "next";
import Link from "next/link";
import { RegisterForm } from "@/components/register-form";

export const metadata: Metadata = {
  title: "Cadastro",
  description: "Cadastro na plataforma",
};

export default function Page() {
  return (
    <>
      <main className="h-[100vh] flex flex-row w-full bg-[#080808] text-white font-medium ">
        <div className="w-[100%] flex items-center justify-center gap-3 flex-col">
          <h1 className="text-3xl">Cadastre-se</h1>
          <p className="text-[20px] opacity-95">
            Crie sua conta e comece agora a usar a plataforma!
          </p>
          <div className="w-[50%]">
            <RegisterForm />
          </div>
          <p className="px-8 text-center text-sm opacity-80">
            Já tem uma conta?
            <Link href="/" className="underline mx-1">
              Faça login aqui!
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
