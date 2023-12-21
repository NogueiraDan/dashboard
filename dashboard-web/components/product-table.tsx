"use client";
import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MoreVertical, Pencil } from "lucide-react";
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

export default function ProductsList({ products }: any) {
  const fields = [
    {
      name: "Nome",
    },
    {
      price: "Preço",
    },
    {
      stock: "Estoque",
    },
    {
      description: "Descrição",
    },
  ];

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
