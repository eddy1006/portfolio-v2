"use client";
import React from "react";
import useDownloader from "react-use-downloader";

const about = () => {
  const languages = [
    "Java",
    "C/C++",
    "Javascript",
    "Python",
    "Dart",
    "Kotlin",
    "PHP",
    "Solidity",
  ];
  const frameworks = [
    "Flutter",
    "React Native",
    "NextJs",
    "Express",
    "Hardhat",
  ];
  const dbAndOthers = ["MongoDb", "MySQL", "Firebase", "NodeJs", "Git"];

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/ResumeWorded.pdf";
  const filename = "AdityaGuptaResume.pdf";

  return (
    <div className="grid sm:grid-cols-6">
      <div className="bg-bgLight sm:col-span-4 h-fit mx-5 p-6 rounded-lg content-between flex flex-col">
        <p className="text-themeText text-justify text-sm sm:text-base">
          Hi, I am Aditya Gupta a Software Engineer. I will graduate from
          Vellore Institute of Technology Vellore, this year with a bachelors
          degree in Computer Science and Engineering and I am an upcoming
          Application Development Enginner at Accenture. I am originally from
          Jhansi UP . I am passionate about coding and learning new skills.
          Beside mentioned are my primary tech skills. Along with my technical
          abilities I am also a team man and have experince with leading a team
          as well on few occasions. I am a strategist and I breakdown my tasks
          into smaller task before starting it. I am also a firm believer of
          commitment and I always like to deliver on my promises. I keep myself
          updated on the latest developments happening in my field and show
          particular intreset in topics that have the potential for the creation
          of a great business idea. To get in touch with me you can use any of
          the socials mentioned below or email me at adigupta239@gmail.com.
        </p>
        <div className="place-content-end flex">
          <button
            className="bg-white p-2 mt-3 text-sm sm:text-base rounded-md hover:opacity-60"
            onClick={() => download(fileUrl, filename)}
          >
            Download Resume
          </button>
        </div>
      </div>
      <div className="m-5 sm:col-span-2">
        <p className="text-pink-500 text-2xl my-2">SKILLS</p>
        <p className="text-base text-white my-2">Programming Languages</p>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <div className="w-fit h-fit bg-bgLight text-green-400 p-2 rounded-md text-sm">
              {lang}
            </div>
          ))}
        </div>
        <p className="text-base my-2 text-white">Frameworks</p>
        <div className="flex flex-wrap gap-2">
          {frameworks.map((lang) => (
            <div className="w-fit h-fit bg-bgLight text-green-400 p-2 rounded-md text-sm">
              {lang}
            </div>
          ))}
        </div>
        <p className="text-base my-2 text-white">Database and other tools</p>
        <div className="flex flex-wrap gap-2">
          {dbAndOthers.map((lang) => (
            <div className="w-fit h-fit bg-bgLight text-green-400 p-2 rounded-md text-sm">
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default about;
