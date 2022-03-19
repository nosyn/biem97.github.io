import { FaGithub, FaTwitter, FaLinkedin, FaPen } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <img src="/images/profile.jpg" className="h-52 w-52 rounded-full " />
      <div className="flex flex-1 flex-col ">
        <div className="flex items-center justify-between border-black first-letter:border-2">
          <h1 className="mt-2 text-3xl font-bold dark:text-white">
            Son Nguyen
          </h1>
          <ThemeToggle />
        </div>
        <h1 className="text-1xl mb-4 dark:text-white">Web Developer</h1>
        <div className="mt-2 flex gap-3">
          <a
            href="https://github.com/biem97"
            target="_blank"
            className="dark:text-white"
          >
            <FaGithub className="text-4xl hover:text-sky-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/son-nguyen-b68378112/"
            target="_blank"
            className="dark:text-white"
          >
            <FaLinkedin className="text-4xl hover:text-sky-500" />
          </a>
          <a
            href="https://nosyn.dev"
            target="_blank"
            className="dark:text-white"
          >
            <FaPen className="text-4xl hover:text-sky-500" />
          </a>
          <a
            href="https://twitter.com/nosyn97"
            target="_blank"
            className="dark:text-white"
          >
            <FaTwitter className="text-4xl hover:text-sky-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
