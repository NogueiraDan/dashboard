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
import { Textarea } from "./ui/textarea";
import { createProduct, getCategories } from "@/lib/actions";
import { useEffect } from "react";

const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Nome deve ter mais de 2 caracteres.",
    })
    .max(30, {
      message: "Nome não deve ter mais de 30 caracteress.",
    }),
  description: z.string(),
  price: z.string(),
  stock: z.string(),
  category: z.string(),
  brand: z.string(),
});

type ProductFormValues = z.infer<typeof productSchema>;

async function onSubmit(data: ProductFormValues) {
  const response = await createProduct(data);
  if (response) {
    console.log(response);
    alert("Produto cadastrado com sucesso!");
    location.reload();
  }
}

export default function NewProductForm({ categories, brands }: any) {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
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
                  <Input placeholder="Ex: Nome do produto " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Descrição do Produto</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Digite aqui a descrição do produto."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex min-w-full gap-5 ">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-2">Preço</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Ex: R$100,00"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-2">Estoque</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Ex: 50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((select: any) => (
                        <SelectItem key={select._id} value={select._id}>
                          {select.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Selecione a categoria a qual pertence o produto
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marca</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a marca" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {brands.map((select: any) => (
                        <SelectItem key={select._id} value={select._id}>
                          {select.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Selecione a marca do produto
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Cadastrar Produto</Button>
        </form>
      </Form>
    </>
  );
}
