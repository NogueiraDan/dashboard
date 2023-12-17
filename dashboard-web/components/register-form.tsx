"use client";

import * as React from "react";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/new-york/input";
import { Label } from "@/components/ui/label";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegisterForm({ className, ...props }: AuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      //   redirect("/dashboard");
      // window.location.replace("/dashboard");
    }, 3000);
  }

  return (
    <div className={cn("grid", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid">
          <div className="grid gap-4 mb-5">
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              required
              placeholder="José da Silva"
              type="text"
              autoCapitalize="none"
              autoComplete="nome"
              autoCorrect="off"
              disabled={isLoading}
              className="placeholder:text-white opacity-70 h-[45px]"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              required
              placeholder="josedasilva@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="placeholder:text-white opacity-70 h-[45px]"
            />
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              required
              placeholder="(00) 00000-0000"
              type="text"
              autoCapitalize="none"
              autoComplete="phone"
              autoCorrect="off"
              disabled={isLoading}
              className="placeholder:text-white opacity-70 h-[45px]"
            />
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              required
              placeholder="*********"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              className="placeholder:text-white opacity-70 h-[45px]"
            />
          </div>
          <Button disabled={isLoading} variant={"secondary"}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Criar minha conta
          </Button>
        </div>
      </form>
    </div>
  );
}
