import React, { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isdarkmode, setDarkMode] = useState(
    typeof window !== "undefined" ? localStorage.theme === "dark" : "light"
  );
  const toggleDarkMode = () => {
    setDarkMode(!isdarkmode);
  };

  useEffect(() => {
    const html = window.document.documentElement;
    const prev = isdarkmode ? "light" : "dark";
    html.classList.remove(prev);
    const next = isdarkmode ? "dark" : "light";
    html.classList.add("theme", next);
    localStorage.setItem("theme", next);
  }, [isdarkmode]);

  return [isdarkmode, toggleDarkMode];
};

export default useDarkMode;
