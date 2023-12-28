"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/new-york/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/actions";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AuthForm({ className, ...props }: AuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setCredentials({
      email: "",
      password: "",
    });
    try {
      await login(credentials);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          {error && (
            <Alert
              variant="destructive"
              className="bg-red-500 text-white font-bold"
            >
              <AlertCircle className="h-4 w-4" color="#fff" />
              <AlertTitle>Ops! Algo deu errado</AlertTitle>
              <AlertDescription>
                Verifique suas credenciais e tente novamente.
              </AlertDescription>
            </Alert>
          )}
          <div className="grid gap-5">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="placeholder:text-white placeholder:opacity-70 opacity-100 1 h-[45px]"
            />
            <Label className="sr-only" htmlFor="password">
              Email
            </Label>
            <Input
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="*********"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              className="placeholder:text-white placeholder:opacity-70 opacity-100 h-[45px]"
            />
          </div>
          <Button disabled={isLoading} variant={"secondary"}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Fazer login
          </Button>
        </div>
      </form>
    </div>
  );
}
