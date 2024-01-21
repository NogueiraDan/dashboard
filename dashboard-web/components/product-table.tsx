"use client";
import * as React from "react";
import { deleteProduct } from "@/lib/actions";
import { formatCurrency } from "@/lib/helpers";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MoreVertical } from "lucide-react";
import {
  Table,
  TableBody,
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
import { Input } from "./ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import AlertRemove from "./alert-remove";
import AlertEdit from "./alert-edit";
import { Button } from "./ui/button";
import FilterModal from "./filter-modal";

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
  isOwner: boolean | undefined;
}

export default function ProductsList({ products, isOwner }: Props) {
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
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Nome,descrição..."
          className="w-[50%] placeholder:opacity-75"
          onChange={(event) => console.log(event.target.value)}
        />

        <div className="flex gap-1 w-[10%]">
          <FilterModal />
        </div>
      </div>
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

                {isOwner && (
                  <TableCell>
                    <Popover>
                      <PopoverTrigger asChild>
                        <MoreVertical className="cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent className="w-100">
                        <div className="flex flex-col gap-2 outline-none">
                          <AlertEdit fields={fields} />
                          <AlertRemove
                            onRemove={handleRemove}
                            id={product._id}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
