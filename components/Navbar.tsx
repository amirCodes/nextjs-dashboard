import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo0.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Navbar = () => {
  return (
    <div className="flex justify-between bg-primary dark:bg-salte-700 text-white py-2 px-5">
      <Link href="/">
        <Image src={logo} alt="AST" width={80} />
      </Link>
      Navbar
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar>
            <AvatarImage src="https://github.com/amircodes.png" alt="Amircodes" />
            <AvatarFallback className="text-orange-600">Amir</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/auth">Logout</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
     
    </div>
  );
};

export default Navbar;
