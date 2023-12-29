"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { MoreVertical } from "lucide-react";
import { deleteUser, getUsers, getUsersByProfile } from "@/lib/actions";
import AlertRemove from "./alert-remove";
import AlertEdit from "./alert-edit";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const fields = [
    {
      name: "Nome",
      type: "text",
    },
    {
      name: "Email",
      type: "email",
    },
    {
      name: "Telefone",
      type: "text",
    },
  ];

  const select = [
    {
      value: "OWNER",
    },
    {
      value: "EMPLOYEE",
    },
  ];

  function handleFilter(event: any) {
    const profile = event === "all" ? "" : event;
    getUsersByProfile(profile).then((response) => {
      setUsers(response);
    });
  }

  function handleSearch(search: any) {
    setSearch(search);
    setFilteredUsers(users.filter((user: any) => user.name.includes(search)));
    console.log("Usuários filtrados", filteredUsers);
  }

  async function handleRemove(id: string) {
    const response = await deleteUser(id);
    if (response) {
      alert("Usuário deletado com sucesso!");
      location.reload();
    }
    return;
  }

  useEffect(() => {
    async function fetchUsers() {
      const response = await getUsers();
      setUsers(response);
    }
    fetchUsers();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Nome,telefone,email..."
          className="w-[50%] placeholder:opacity-75"
          onChange={(event) => handleSearch(event.target.value)}
        />
        <div className="flex gap-1">
          <Select onValueChange={(event) => handleFilter(event)}>
            <SelectTrigger className="w-[120px] bg-transparent border-slate-300">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Perfis</SelectLabel>
                <SelectItem value="owner">Owner</SelectItem>
                <SelectItem value="employee">Funcionário</SelectItem>
                <SelectItem value="all">Todos</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ScrollArea className="h-72 w-full rounded-md border">
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
            {!search && (
              <>
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
                            <AlertEdit fields={fields} select={select} />
                            <AlertRemove
                              onRemove={handleRemove}
                              id={user._id}
                            />
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}

            {search && (
              <>
                {filteredUsers.map((user: any) => (
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
                            <AlertEdit fields={fields} select={select} />
                            <AlertRemove
                              onRemove={handleRemove}
                              id={user._id}
                            />
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
