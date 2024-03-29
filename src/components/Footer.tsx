import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-6 flex grow flex-col justify-end">
      <hr className="border-dashed border-purple-600" />
      <div className="flex items-center justify-center gap-2 dark:text-white">
        Made with <AiFillHeart className="text-red-400" /> |{" "}
        <a
          href="https://github.com/biem97/biem97.github.io"
          className="hover:text-sky-500"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
