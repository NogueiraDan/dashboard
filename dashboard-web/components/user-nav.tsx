"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";

export default function UserNav() {
  return (
    <div className="flex justify-between items-center mb-4">
      <Input
        placeholder="Nome,telefone,email..."
        className="w-[50%] placeholder:opacity-75"
        onChange={(event) => console.log(event.target.value)}
      />
      <div className="flex gap-1">
        <Select>
          <SelectTrigger className="w-[120px] bg-transparent border-slate-300">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Perfis</SelectLabel>
              <SelectItem value="OWNER">Owner</SelectItem>
              <SelectItem value="EMPLOYEE">Funcionário</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
