"use client";
import Link from "next/link";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

import { Button } from "@nextui-org/button";

const Header = () => {
  return (
    <div className="w-screen p-6 flex place-content-between items-center">
      <Link href="/">
        {/* <p className="text-sky-400 text-xl align-bottom sm:text-3xl">
          ADITYA GUPTA
        </p> */}
        <Button
          variant="light"
          className="text-sky-400 text-xl align-bottom sm:text-3xl bg-inherit"
        >
          ADITYA GUPTA
        </Button>
      </Link>
      <div className="flex-col place-content-center hidden sm:block">
        <Link href="/about">
          <Button variant="light" color="primary" className="sm:text-xl mr-4">
            About
          </Button>
        </Link>
        <Link href="/projects">
          <Button variant="light" color="primary" className="sm:text-xl">
            Projects
          </Button>
        </Link>
      </div>
      <Dropdown backdrop="blur" className="sm:hidden">
        <DropdownTrigger>
          <Button variant="ghost" className="sm:hidden">
            Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Static Actions">
          <DropdownItem key="about" href="/about">
            About Me
          </DropdownItem>
          <DropdownItem key="projects" href="/projects">
            Projects
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Header;
