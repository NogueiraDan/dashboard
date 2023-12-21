"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createUser } from "@/lib/actions";

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Nome deve ter mais de 2 caracteres.",
    })
    .max(30, {
      message: "Nome não deve ter mais de 30 caracteress.",
    }),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Senha deve ter no mínimo 6 caracteres.",
  }),
  phone: z.string(),
  profile: z.string(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

async function onSubmit(data: ProfileFormValues) {
  const response = await createUser(data);
  if (response) {
    console.log(response);
    alert("Usuário cadastrado com sucesso!");
    location.reload();
  }
}

export default function NewUserForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: João da Silva" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: joao.silva@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Senha</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite sua senha"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: (99) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Perfil</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o perfil" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="owner">Owner</SelectItem>
                    <SelectItem value="employee">Funcionário</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Escolha o perfil que você quer conceder para o usuário.
                  Lembre-se que o Owner tem acesso total.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Novo Usuário</Button>
        </form>
      </Form>
    </>
  );
}
