import React from "react";
import { Footer, Header } from "./";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="bg-white dark:bg-[#1C1E21] dark:text-white">
      {router.pathname !== "/404" && <Header />}
      {children}
      {router.pathname !== "/404" && <Footer />}
    </div>
  );
};

export default Layout;
