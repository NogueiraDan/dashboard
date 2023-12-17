import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
};

export default function Page() {
  return (
    <>
      <main className="h-[100vh] flex flex-row w-full bg-[#080808] text-white font-medium ">
        <div className="w-[100%] sm:w-[60%] flex items-center justify-center gap-3 flex-col">
          <h1 className="text-3xl">Entre em sua conta</h1>
          <p className="text-[16px] opacity-90">
            Acesse o dashboard com seu email e senha
          </p>
          <div className="w-[50%]">
            <AuthForm />
          </div>
          <p className="px-8 text-center text-sm opacity-80">
            Ainda não tem uma conta?
            <Link href="/register" className="underline mx-1">
              Cadastre-se aqui!
            </Link>
          </p>
        </div>
        <div className="w-[40%] justify-center items-center bg-[#131315] hidden sm:flex">
          <Image
            src="/homeBanner.svg"
            width={1000}
            height={800}
            alt="Authentication"
            className="block dark:hidden"
          />
        </div>
      </main>
    </>
  );
}
