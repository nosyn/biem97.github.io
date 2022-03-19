import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-center">
      <div className="max-w-2xl flex-1">
        <hr className="border-dashed border-purple-600" />
        <div className="flex items-center justify-center gap-2 dark:text-white">
          Made with <AiFillHeart className="text-red-400" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
