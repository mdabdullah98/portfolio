import { FaHtml5, FaCss3, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiRedux,
  SiTailwindcss,
  SiAxios,
  SiReacthookform,
} from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";

const stackContainer = [
  {
    id: "_stack_01",
    Stack_image: FaHtml5,
    language: "html",
    stack_name: "html",
    stack_content: ` HyperText Markup Language or HTML is the standard markup language
              for documents designed to be displayed in a web browser. It
              defines the content and structure of web content.`,
  },
  {
    id: "_stack_02",
    Stack_image: FaCss3,
    language: "css-3",
    stack_name: "css 3",
    stack_content: `
CSS3, also known as Cascading Style Sheets Level 3, is a more advanced version of CSS and the successor of CSS2. CSS3 is used for the same thing as CSS, namely to style web pages and make them more attractive and user-friendly`,
  },
  {
    id: "_stack_03",
    Stack_image: IoLogoJavascript,
    language: "javascript",
    stack_name: "javascript",
    stack_content: `
JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS`,
  },
  {
    id: "_stack_04",
    Stack_image: FaReact,
    language: "react",
    stack_name: "react",
    stack_content: `React basically allows developers to utilize individual parts of their application on both the client-side and the server-side, which ultimately boosts the speed of the development process.`,
  },
  {
    id: "_stack_05",
    Stack_image: SiRedux,
    language: "redux",
    stack_name: "redux",
    stack_content: `
Redux helps us manage "global" state - state that is needed across many parts of your application. The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in our application is being updated,`,
  },
  {
    id: "_stack_06",
    Stack_image: SiTailwindcss,
    language: "tailwind-css",
    stack_name: "tailwind css",
    stack_content: `Tailwind CSS is a design system implementation in pure CSS. It is also configurable. It gives developers super powers. It allows them to build websites with a clean consistent UI out of the box.
`,
  },
  {
    id: "_stack_07",
    Stack_image: FaGithub,
    language: "github",
    stack_name: "github",
    stack_content: `GitHub is an online software development platform. It's used for storing, tracking, and collaborating on software projects. It makes it easy for developers to share code files and collaborate with fellow developers on open-source projects.
`,
  },
  {
    id: "_stack_08",
    Stack_image: DiResponsive,
    language: "responsive",
    stack_name: "responsive-website",
    stack_content: `A responsive web design automatically adjusts for different-sized screens and viewports. With a responsive website, someone can browse your website from any device and it will still look and function perfectly..
`,
  },
  {
    id: "_stack_09",
    Stack_image: IoLogoFirebase,
    language: "firebase",
    stack_name: "backend as service",
    stack_content: `I have used firebase backend as service to store user credential so that user can do login and signup.In blog app I am using firebase storage to store images and storing blog title ,content and status into the firestore database.
`,
  },
  {
    id: "_stack_10",
    Stack_image: SiAxios,
    language: "axios",
    stack_name: "Axios",
    stack_content: `Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests..
`,
  },
  {
    id: "_stack_11",
    Stack_image: SiReacthookform,
    language: "react-hook-form",
    stack_name: "react hook form",
    stack_content: `React Hook Form is one such library that helps to manage complex forms. It has excellent performance, is super lightweight, has zero dependencies, can be easily integrated with different React UI frameworks like Material, Antd, and provides an intuitive API and excellent developer experience.
`,
  },
];

export default stackContainer;
