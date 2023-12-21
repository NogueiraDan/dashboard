"use client";
import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MoreVertical } from "lucide-react";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProductNav from "./product-nav";
import { formatCurrency } from "@/lib/helpers";
import AlertRemove from "./alert-remove";
import AlertEdit from "./alert-edit";
import { deleteProduct } from "@/lib/actions";

interface Product {
  brand: string;
  category: string;
  description: string;
  name: string;
  price: number;
  stock: number;
  __v: number;
  _id: string;
}

interface Props {
  products: Product[];
}

export default function ProductsList({ products }: Props) {
  const fields = [
    {
      name: "Nome",
      type: "text",
    },
    {
      name: "Preço",
      type: "text",
    },
    {
      name: "Estoque",
      type: "text",
    },
    {
      name: "Descrição",
      type: "text",
    },
  ];

  async function handleRemove(id: string) {
    const response = await deleteProduct(id);
    if (response) {
      alert("Produto deletado com sucesso!");
      location.reload();
    }
    return;
  }

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
                        <AlertEdit fields={fields} />
                        <AlertRemove onRemove={handleRemove} id={product._id} />
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
