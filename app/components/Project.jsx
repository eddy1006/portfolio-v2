"use client";
import React from "react";
import { useState } from "react";

const Project = ({ p }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className="bg-bgLight sm:w-2/3 sm:place-items-center h-fit p-4 m-4 rounded-md text-sm hover:opacity-80"
      onClick={() => setExpand(!expand)}
    >
      <div className="text-white text-base flex place-content-between">
        <p>{p.name}</p>
        {/* <div className="text-green-400 text-sm">
          <span className="mr-2">{p.technologies[0]}</span>
          <span>{p.technologies[1]}</span>
        </div> */}
        <a href={p.link} target="_blank">
          <img
            src="https://img.icons8.com/fluency-systems-filled/48/github.png"
            className="max-h-8"
          />
        </a>
      </div>
      {expand ? (
        <div>
          <p className="text-themeText text-justify">{p.description}</p>
          <p className="text-pink-500 text-base my-2">Technologies Used</p>
          <div className="flex flex-wrap">
            {p.technologies.map((tech) => (
              <span className="text-green-400 mr-4">{tech}</span>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Project;
