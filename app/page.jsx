"use client";
import React from "react";

const Home = () => {
  return (
    <div className="flex-grow grid place-items-center">
      <div className="grid gap-4 place-items-center">
        <img src="/images/aditya.png" className="h-40 w-40 sm:h-60 sm:w-60" />
        <span className="type-titles text-pink-400 text-2xl sm:text-3xl"></span>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/eddy1006" target="_blank">
          <div className="bg-githubColor  opacity-30 h-12 w-12 hover:opacity-100 transform transition duration-500 hover:scale-125"></div>
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-gupta-0985b621a/"
          target="_blank"
        >
          <div className="bg-linkedinColor opacity-30 h-12 w-12 hover:opacity-100 transform transition duration-500 hover:scale-125"></div>
        </a>
        <a href="https://twitter.com/eddityyaa" target="_blank">
          <div className="bg-xColor opacity-30 h-12 w-12 hover:opacity-100 transform transition duration-500 hover:scale-125"></div>
        </a>
        <a href="https://leetcode.com/adigupta239/" target="_blank">
          <div className="bg-leetcodeColor opacity-30 h-12 w-12 hover:opacity-100 transform transition duration-500 hover:scale-125"></div>
        </a>
      </div>
    </div>
  );
};

export default Home;
