"use client";
import React from "react";
import { Image } from "@nextui-org/react";

const Home = () => {
  return (
    <div className="flex-grow grid place-items-center">
      <div className="grid gap-4 place-items-center min-h-fit">
        <Image
          isZoomed
          src="/images/aditya.png"
          alt="NextUI Album Cover"
          className="m-8 h-40 w-40 sm:h-60 sm:w-60"
        />
        <div>
          <span className="text-2xl sm:text-3xl">I'm a </span>
          <span className="type-titles text-pink-400 text-2xl sm:text-3xl drop-shadow-glow"></span>
        </div>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/eddy1006" target="_blank">
          <div className="bg-githubColor  opacity-30 h-12 w-12 hover:opacity-100 hover:drop-shadow-glow transform transition duration-500 hover:scale-125"></div>
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-gupta-0985b621a/"
          target="_blank"
        >
          <div className="bg-linkedinColor opacity-30 h-12 w-12 hover:opacity-100 hover:drop-shadow-glow transform transition duration-500 hover:scale-125"></div>
        </a>
        <a href="https://twitter.com/eddityyaa" target="_blank">
          <div className="bg-xColor opacity-30 h-12 w-12 hover:opacity-100 hover:drop-shadow-glow transform transition duration-500 hover:scale-125"></div>
        </a>
        <a href="https://leetcode.com/adigupta239/" target="_blank">
          <div className="bg-leetcodeColor opacity-30 h-12 w-12 hover:opacity-100 hover:drop-shadow-glow transform transition duration-500 hover:scale-125"></div>
        </a>
      </div>
    </div>
  );
};

export default Home;
