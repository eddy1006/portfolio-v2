import React from "react";
import Project from "../components/Project";

const projects = () => {
  const projects = [
    {
      name: "Noogle",
      description:
        "/** Noogle, is a VS Code extension which helps fellow developers to quickly access suggestion to the problems encountered. This extension provides with instant and appropriate hints to debug the errors and bugs encountered without switching to the browser. Moreover the extension automates and links to the documentation of the framework or library we are working with by detecting our imports on VS Code itself for easy access. With all these rich features and user friendly design, developers will find it more convenient to look up for a fix and everything will be encapsulated in your favourite IDE YOUR VS CODE! Whenver you have an error in your code just use alt + n. **/",
      technologies: [
        "Javascript",
        "NodeJs",
        "Web Scrapping",
        "axios",
        "cheerio",
        "VS code extension API",
      ],
      link: "https://github.com/eddy1006/Noogle",
    },
    {
      name: "XSS Vulnerability Detector",
      description:
        "/** XSS vulnerability extension is a chrome extension build to verify whether a website is safe from cross site scripting attacks or not. The following extension was made under the project component for the course CSE4003 Cyber Security. Working is simple you just need to open the extension on any website that you need to check and the extension will display the result either the website is safe or not. Internally what happens is that our extension takes the url of current tab and send it to the backend which spawns a child process which is a python scanner file which uses this url and scraps it's html structure to find input text fields in any form present on the website. Then the scanner file attempts to submit the form with a script inside the text field and checks if that script appears in url on submitting then it means that the website is vulnarable or else not and sends the same back to frontend. **/",
      technologies: [
        "Javascript",
        "NodeJs",
        "Express",
        "Python",
        "Pandas",
        "Numpy",
        "BeautifulSoup",
        "html",
      ],
      link: "https://github.com/eddy1006/XSS_Vulnerability_Extension",
    },
    {
      name: "Network Attack Predictor",
      description:
        "/** With the increase in number of IoT devices present in a household it also presents a new threat to the security of the users and a new way for hackers to get into your system. For this study my team took the help of a kaggle dataset which had the most relevant features relating to an IoT device network traffic and we used this datasest to train our ANN model to predict whether a series of packets are a sign of some attack and if attack then which kind of attack or not. For the purpose of simulation we set up a virtual device with the help of VirtualBox and installed kali linux on it and then we started pinging our current device. This traffic was collected using wireshark library in python and was fed to our model which gave it's prediction. The model was able to get an accuracy of as high as 98 percent in some cases. **/",
      technologies: [
        "ANN",
        "Tensorflow",
        "keras",
        "pandas",
        "numpy",
        "sickit learn",
        "Python",
        "smtp",
        "Sinch SMS API",
        "Jupyter Notebook",
        "Kali Linux",
        "Wireshark",
        "Cisco packet tracer",
      ],
      link: "https://github.com/eddy1006/Real-time-network-attack-detector-IoT-",
    },
    {
      name: "Sportistan",
      description:
        "/** Seek,Find,Invite,Book,Chat! Sportistan is a sport/activity scheduler which could be accessed with a single touch on your smartphone. With this application one can find new people and sport events that are happening in your area,your school,colleges or even any society. What's cooler? You can also host an event. Through this app our clients can find the events happening in that area. Our clients can filter options to match their expectations. Great thing about our application is the fact that they can host their events and they can also set their arena parameters.Even we have a global chat arena, where our athletes can find new mates to play with, they can invite them and expand their team to play with.Our sport enthusiasts and gamers can set their preferences like number of players and other parameters for the events they want to host. This application was a group project and also a submission in a few hackathons and I contributed in the application development. **/",
      technologies: [
        "Flutter",
        "Dart",
        "NodeJs",
        "Express",
        "websockets",
        "Mongodb",
        "Firebase",
        "Auth0",
        "figma",
        "GoDaddy.com",
      ],
      link: "https://github.com/eddy1006/Sportistaan-devspace2022",
    },
    {
      name: "EtherWheels",
      description:
        "/** Smart Contract based peer to peer carpooling focuses on facilitating the transactions between a driver and passenger in a carpooling environment through the use of Cryptocurrency like ETH and levaraging the automation of smart contracts. The decentralized nature of blockchains makes carpooling more reliable as it abolishes the involvement of a thrid party to manage funds between driver and passenger. On this carpooling platform any user can connect with their account with the use of a wallet and then register as either a passenger or a driver. Registering as driver will give them chance to create their ride along with necessary details and it will be shown to all the users registerd as passengers who can then book any ride which they like. The fare calculation is done automatically based on the mileage of vehicle, gas price and distance to be travelled. Other features like ride cancellation are also present. **/",
      technologies: [
        "Solidity",
        "Hardhat",
        "NextJs",
        "React",
        "Ethers js",
        "Etherscan",
        "Metamask",
        "Google maps API",
        "Price Converter API",
        "Sepolia",
      ],
      link: "https://github.com/eddy1006/carpooling-backend-solidity",
    },
  ];

  return (
    <div className="grid sm:place-items-center">
      {projects.map((project) => (
        <Project p={project} />
      ))}
    </div>
  );
};

export default projects;
