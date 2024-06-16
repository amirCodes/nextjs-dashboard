"use client";

import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo0.png";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeToggler from "@/components/ThemeToggler";
import { createClient } from "@/utils/supabase/client";
// import { signOut } from "@/app/(auth)/login/actions";
const Navbar = () => {
  const { setTheme } = useTheme();
  async function signOut() {
    const supabase = createClient();
  
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error logging out:', error);
    } else {
      // redirect('/auth'); // Redirect to /auth after logging out;
      console.log("yay you loged out ......")
    }
  }
  return (
    <div className="flex justify-between bg-primary dark:bg-salte-700  py-2 px-5">
      <Link href="/">
        <Image src={logo} alt="AST" width={80} />
      </Link>
      {/* Navbar : otyher top tabs if required*/}
      <div className="flex items-center justify-between">
        <ThemeToggler />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage
                src="https://github.com/amircodes.png"
                alt="Amircodes"
              />
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
              <button onClick={signOut}>
                {/* <Link href="/auth">Logout</Link> */}
                Logout
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
