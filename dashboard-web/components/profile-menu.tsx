"use client";
import {
  LogOut,
  Plus,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { logout } from "@/lib/actions";

interface Props {
  isOwner: boolean | undefined;
}

export default function ProfileMenu({ isOwner }: Props) {
  async function handleLogout() {
    await logout();
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://source.unsplash.com/random/40x40?profile" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link className="flex" href="/profile">
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </Link>
          </DropdownMenuItem>
         
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        {isOwner && (
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link className="flex" href="/dashboard/new-user">
                <Plus className="mr-2 h-4 w-4" />
                <span>Novo usuário</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="flex" href="/dashboard/new-product">
                <Plus className="mr-2 h-4 w-4" />
                <span>Novo produto</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex cursor-pointer" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
