"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
interface HeaderProps {
  children: React.ReactNode;
  className: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `h-fit
    bg-[#F9FAF4]
    p-2
    hidden
    sm:flex`,
        className
      )}
    >
      <div className="w-full flex gap-x-4 items-center justify-between ">
        <div className="relative gap h-16 w-16 ml-4">
          <div className="md:w-6/12 w-4/12">
            <Image fill src="/images/leaf.png" alt="natural food" />
          </div>
        </div>
        <div>
          <h1 className="text-[#18221A] text-2xl mt-4 text-center">Mundos Harvest</h1>
        </div>
        <div className=" gap-x-6 sm:flex mt-6">
          <h1 className="text-[#18221A]">Contact</h1>
          <h1 className="text-[#18221A] mr-4">About</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
// TODO: add link to credit home icon creators
// <a target="_blank" href="https://icons8.com/icon/20875/natural-food">Natural Food</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
