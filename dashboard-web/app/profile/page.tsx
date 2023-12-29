import { checkAuth, getUserInfo, isOwner } from "@/lib/actions";
import { Metadata } from "next";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Perfil",
  description: "Profile page",
};

export default async function Page() {
  const owner = await isOwner();
  await checkAuth();
  const user = await getUserInfo();
  console.log(user);
  return (
    <>
      <main className="flex flex-col h-[100vh] w-full bg-[#fafafa] text-black font-medium px-8 py-10">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-8">Perfil</h1>
          <Button className="w-[120px]" variant={"secondary"}>
            <Link href="/dashboard">Voltar</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4 items-center md:flex-row">
          <div className="w-[40%] flex flex-col items-start">
            <Card className="w-[90%] flex items-center flex-col">
              <CardHeader className="flex items-center flex-col">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardDescription>{user.profile}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <span className="text-3xl font-bold">{user.name}</span>
                <span className="opacity-70">{user.phone}</span>
              </CardContent>
              <CardFooter className="flex">
                <Button className="w-[120px]" variant={"outline"}>
                  Trocar foto
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="w-[60%] flex flex-col items-center">
            <Card className="w-[100%]">
              <CardHeader>
                <CardTitle>Editar informações</CardTitle>
                <CardDescription>
                  Atualize as informações que deseja
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col w-full gap-4">
                    <div className="flex gap-4 w-full">
                      <div className="flex flex-col w-[50%] space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" placeholder="Ex: João da Silva" />
                      </div>

                      <div className="flex flex-col w-[50%] space-y-2">
                        <Label htmlFor="name">Email</Label>
                        <Input
                          id="name"
                          placeholder="Ex: joao.silva@example.com"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 w-full">
                      <div className="flex flex-col w-[50%] space-y-2">
                        <Label htmlFor="name">Telefone</Label>
                        <Input id="name" placeholder="Ex: (99) 99999-9999" />
                      </div>

                      {owner && (
                        <div className="flex flex-col w-[50%] space-y-2">
                          <Label htmlFor="name">Perfil</Label>
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Selecione o perfil" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="owner">Owner</SelectItem>
                              <SelectItem value="employee">
                                Funcionário
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="w-[120px]">Atualizar</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
