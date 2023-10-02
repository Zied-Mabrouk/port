import { LanguageContext } from "@/pages/_app";
import Link from "next/link";
import React, { useContext } from "react";

const NavBar = ({ active, setActive, swapLanguage }) => {
  const [language, setLanguage] = React.useContext(LanguageContext);
  const handleClick = (val) => {
    // setSelected(val);
    // setActive(false);
  };
  const selected = "";
  const width = active ? "230px" : "10vh";

  const navItems = language.navItems;
  const durations = navItems.map((item, key) => ({
    transitionDuration: `${key * 0.1 + 1}s`,
  }));
  const isEnglish = language.type === "EN";
  return (
    <div
      className={`navbar bg-secondary relative transition-[width] overflow-hidden`}
      style={{ maxWidth: width, minWidth: width }}
    >
      <div
        className={`navbar-header px-8 bg-accent w-full h-[10%] flex items-center ${
          active ? "justify-left" : "justify-center"
        }`}
      >
        {active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            width="20"
            height="20"
            overflow="visible"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            onClick={() => setActive(!active)}
            className="fill-white cursor-pointer"
          >
            <line x1="0" y1="0" x2="50" y2="50" />
            <line x1="50" y1="0" x2="0" y2="50" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 100 80"
            width="20"
            height="20"
            className="fill-white cursor-pointer"
            onClick={() => setActive(!active)}
          >
            <rect width="100" height="12"></rect>
            <rect y="30" width="100" height="12"></rect>
            <rect y="60" width="100" height="12"></rect>
          </svg>
        )}
      </div>
      <div className="navbar-items h-[75%] gap-2 duration-[1s] flex flex-col justify-center px-8">
        {navItems &&
          navItems.map((item, key) => (
            <Link
              style={durations[key]}
              onClick={() => handleClick(item)}
              className={`transition-all text-grey-text text-sm delay-200 ${
                active ? "translate-x-0" : "translate-x-32"
              }`}
              href={item.toLowerCase()}
            >
              {item}
            </Link>
          ))}
      </div>
      <div className="navbar-languages h-[15%] flex flex-col items-center justify-center gap-2 text-grey-text text-xs bg-accent">
        <div
          className={`rounded-full p-[1px] w-[25px] font-semibold cursor-pointer aspect-square flex justify-center items-center ${
            isEnglish ? "bg-dark" : "bg-main"
          }`}
          onClick={swapLanguage}
        >
          <span>FR</span>
        </div>
        <div
          className={`rounded-full p-[1px] w-[25px] font-semibold cursor-pointer aspect-square flex justify-center items-center ${
            !isEnglish ? "bg-dark" : "bg-main text-dark"
          }`}
          onClick={swapLanguage}
        >
          <span>EN</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
