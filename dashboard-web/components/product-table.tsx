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
import AlertRemove from "./alert-remove";
import AlertEdit from "./alert-edit";
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
      label: "Nome",
      name:"name",
      type: "text",
    },
    {
      label: "Preço",
      name: "price",
      type: "text",
    },
    {
      label: "Estoque",
      name: "stock",
      type: "text",
    },
    {
      label: "Descrição",
      name:"description",
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

  async function handleUpdate(user: any, id: string) {
    console.log("User", user);
    console.log("ID", id);
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
                          <AlertEdit
                            fields={fields}
                            id={product._id}
                            onSubmit={handleUpdate}
                          />
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
