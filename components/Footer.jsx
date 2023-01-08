import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[200px] w-full bg-black text-white ">
      <div className=" xl:flex xl:justify-around items-center text-center py-14">
        <div >
          <Link href="https://hygraph.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              Powered by HYGRAPH
            </a>
          </Link>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/danghoangvinh" passHref>
            <a target="_blank" rel="noopener noreferrer">
              Linked
            </a>
          </Link>

          <Link href="https://github.com/vinh-vinh" passHref>
            <a target="_blank" rel="noopener noreferrer" className="mx-4">
              Github
            </a>
          </Link>
        </div>

        <div className="flex flex-col">
          <Link href="https://www.youtube.com/@javascriptmastery" passHref>
            <a target="_blank" rel="noopener noreferrer">JavaScript Mastery</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
