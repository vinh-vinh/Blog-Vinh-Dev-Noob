import Link from "next/link";
import React from "react";

const Eroor = () => {
  return (
    <div className="error">
      <div className="text-4xl text-pink-600 absolute items-center text-center xl:top-1/2 xl:left-1/2 xl:translate-x-1/2 top-1/2">
        Opppp..... 404
        <div className="underline">
          <Link href="/">
            <a>Go to home</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Eroor;
