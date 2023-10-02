"use client";
import React, { FC, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogoutButton } from "./auth";
import { signOut } from "next-auth/react";
import { LogOut, Mail, User2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface ProfileMenuProps {
  avatar: string | null | undefined;
  name: string | null | undefined;
  email: string | null | undefined;
}

const ProfilMenu: FC<ProfileMenuProps> = ({ avatar, email, name }) => {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/") {
    return "";
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={avatar ?? ""} />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Mail className="mr-2 h-4 w-4" /> <span>{email}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <User2 className="mr-2 h-4 w-4" /> <span>{name}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfilMenu;
