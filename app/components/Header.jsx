import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-screen p-6 flex place-content-between">
      <Link href="/">
        <p className="text-sky-400 text-2xl sm:text-3xl">ADITYA GUPTA</p>
      </Link>
      <div className="flex-col place-content-center">
        <Link href="/about">
          <button className="text-green-400 sm:text-xl mr-4 hover:underline">
            About
          </button>
        </Link>
        <Link href="/projects">
          <button className="text-green-400 sm:text-xl hover:underline">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
