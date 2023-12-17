"use client";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "./ui/button";
import { MoreVertical, Pencil, Trash } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function handleRemove() {
  console.log("Usuário removido");
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
            Essa ação não pode ser desfeita e o usuário será excluído
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
            Editando o usuário
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
              <Label htmlFor="email">Email</Label>
              <Input id="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="profile">Perfil</Label>
              <Select>
                <SelectTrigger id="profile">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="OWNER">Owner</SelectItem>
                  <SelectItem value="EMPLOYEE">Employee</SelectItem>
                </SelectContent>
              </Select>
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

export default function UsersTable({ users }: any) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Telefone</TableHead>
          <TableHead className="text-right">Perfil</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user: any) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell className="text-right">{user.profile}</TableCell>
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
  );
}
