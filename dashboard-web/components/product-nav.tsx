"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function ProductNav() {
  return (
    <div className="flex justify-between items-center mb-4">
      <Input
        placeholder="Nome,descrição..."
        className="w-[50%] placeholder:opacity-75"
        onChange={(event) => console.log(event.target.value)}
      />
      <div className="flex gap-1">
        <Select>
          <SelectTrigger className="w-[150px] bg-transparent border-slate-300">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent className="pb-2 ">
            <SelectGroup className="flex flex-col gap-1">
              <SelectLabel>Categoria</SelectLabel>
              <div className="focus:bg-accent flex justify-center items-center gap-2 cursor-pointer ">
                <Checkbox id="suplemento" value="suplemento" />
                <label htmlFor="suplemento" className="text-sm font-medium ">
                  Suplemento
                </label>
              </div>
              <div className="focus:bg-accent flex justify-center items-center gap-2">
                <Checkbox id="remedio" value="remedio" />
                <label htmlFor="remedio" className="text-sm font-medium ">
                  Suplemento
                </label>
              </div>
            </SelectGroup>

            <SelectGroup className="flex flex-col gap-1">
              <SelectLabel>Marca</SelectLabel>
              <div className="focus:bg-accent flex justify-center items-center gap-2 cursor-pointer ">
                <Checkbox id="integral" value="integral" />
                <label htmlFor="integral" className="text-sm font-medium ">
                  Integral
                </label>
              </div>
              <div className="focus:bg-accent flex justify-center items-center gap-2">
                <Checkbox id="generico" value="generico" />
                <label htmlFor="generico" className="text-sm font-medium ">
                  Genérico
                </label>
              </div>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
