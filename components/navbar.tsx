import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { BiWallet } from "react-icons/bi";

export function NavComponent() {
  return (
    <Navbar className="px-5 py-4 flex" position="static">
      <NavbarContent
        className="sm:flex justify-center text-lg font-sans w-full"
        justify="center"
      >
        <BiWallet size={30} />
        <p className="font-bold text-xl text-inherit pl-2"> SecureSpace</p>
      </NavbarContent>
    </Navbar>
  );
}
