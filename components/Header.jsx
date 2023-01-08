import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import Image from "next/image";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import useDarkMode from "../pages/useDarkMode";
import iconDev from '../public/dev-dot-to.png'
const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  const [isdarkmode, toggleDarkMode] = useDarkMode();


  return (
    <>
      <div className={`mb-20 header`}>
        <div className="container mx-auto px-10 mb-8 py-8 ">
          <div className="border-b w-full flex flex-row justify-between border-black">
            <div className="md:float-left block">
              <Link href="/">
                <a className="flex flex-row items-center">
                  <Image
                    src={iconDev}
                    alt="logo"
                    width={60}
                    height={60}
                  />
                  <div className="flex flex-col ml-4 items-center">
                    <span className="text-gray-800 font-bold ">Blog me</span>
                    <span className="cursor-pointer font-bold text-1xl text-gray-800">
                      Vinh-Dev-Noob
                    </span>
                  </div>
                </a>
              </Link>
            </div>
            {/* Edit */}
            <div className=" md:float-left md:contents">
              <div className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer no-underline  hover:duration-300">
                <div className="flex text-center items-center">
                  <Link href="/about-me">
                    <a>About me</a>
                  </Link>
                  <button onClick={() => !toggleDarkMode()} className="mx-4">
                    {isdarkmode ? (
                      <MdOutlineLightMode className="text-2xl w-12 h-10  rounded-xl text-yellow-500 shadow-xl shadow-amber-400 hover:shadow-amber-600 hover:duration-300 hover:transition-all"  />
                    ) : (
                      <MdOutlineNightlight className="text-2xl w-12 h-10 rounded-xl  text-yellow-500 shadow-xl shadow-amber-400 hover:shadow-amber-600 hover:duration-300 hover:transition-all" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
