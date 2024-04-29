/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        github:
          "url('https://img.icons8.com/fluency-systems-regular/48/github.png')",
        githubColor: "url('https://img.icons8.com/fluency/48/github.png')",
        linkedin:
          "url('https://img.icons8.com/fluency-systems-regular/48/linkedin.png')",
        linkedinColor: "url('https://img.icons8.com/fluency/48/linkedin.png')",
        x: "url('https://img.icons8.com/fluency-systems-regular/48/twitterx.png')",
        xColor: "url('https://img.icons8.com/fluency/48/twitterx--v1.png')",
        leetcode:
          "url('https://img.icons8.com/external-tal-revivo-light-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-light-tal-revivo.png')",
        leetcodeColor:
          "url('https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png')",
      },
      colors: {
        bgLight: "#3d424d66",
        themeText: "#5c6773",
      },
    },
  },
  plugins: [
    require("tailwind-typewriter")({
      wordsets: {
        titles: {
          words: ["Software Engineer", "Problem Solver", "AI/ML Enthusiast"],
          delay: 1,
          writeSpeed: 0.2,
          pauseBetween: 2,
        },
      },
    }),
  ],
};
