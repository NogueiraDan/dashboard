"use client";
import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import { MoreVertical, Pencil, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import ProductNav from "./product-nav";
import { formatCurrency } from "@/lib/helpers";

function handleRemove() {
  console.log("Usuário removido");
  window.location.reload();
}
function AlertRemove() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"outline"}
          className="gap-2 flex items-center justify-center outline-none"
        >
          Remover <Trash color="#ff0000" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza que deseja remover ?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita e o seu dado será excluído
            permanentemente
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-[#ff0000] text-white font-medium hover:bg-[#ff4444] hover:text-white">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleRemove}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
function AlertEdit() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"outline"}
          className="gap-2 flex items-center justify-center outline-none"
        >
          Editar
          <Pencil color="#0055ff" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">
            Editando o produto
          </AlertDialogTitle>
          <AlertDialogDescription>
            Preencha com as novas informações
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Preço</Label>
              <Input id="price" type="number" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="stock">Estoque</Label>
              <Input id="stock" type="number" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Descrição</Label>
              <Input id="description" />
            </div>
          </div>
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-[#ff0000] text-white font-medium hover:bg-[#ff4444] hover:text-white">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => alert("Editou")}
            className="bg-[#0055ff] hover:bg-[#2970ff]"
          >
            Atualizar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function ProductsList({ products }: any) {
  return (
    <>
      <ProductNav />
      <ScrollArea className="h-72 w-full rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Estoque</TableHead>
              <TableHead className="text-right">Descrição</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product: any) => (
              <TableRow key={product._id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell className="text-right">
                  {product.description}
                </TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger asChild>
                      <MoreVertical className="cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="w-100">
                      <div className="flex flex-col gap-2 outline-none">
                        <AlertEdit />
                        <AlertRemove />
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
