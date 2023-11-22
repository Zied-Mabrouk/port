import { LanguageContext } from "@/pages/_app";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const NavBar = ({ active, setActive, swapLanguage }) => {
  const [language, setLanguage] = React.useContext(LanguageContext);

  const navItems = language.navItems;
  const durations = navItems.map((item, key) => ({
    transitionDuration: `${key * 0.1 + 1}s`,
  }));
  const isEnglish = language.type === "EN";
  const router = useRouter();
  const path = router.pathname;
  return (
    <div
      className={`navbar absolute top-4 h-[calc(100vh-32px)] right-0 bg-secondary transition-[width] overflow-hidden min-w-[230px] ${
        !active ? "translate-x-[150px]" : "translate-x-[16px]"
      }`}
    >
      <div
        className={`navbar-header px-[30px] bg-accent w-full h-[10%] flex items-center ${
          active ? "justify-left" : "justify-"
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
            className="fill-white cursor-pointer min-w-[20px]"
          >
            <line x1="0" y1="0" x2="50" y2="50" />
            <line x1="50" y1="0" x2="0" y2="50" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 100 80"
            width="20"
            height="20"
            className="fill-white cursor-pointer min-w-[20px]"
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
              key={key}
              className={`transition-all text-grey-text border-b w-fit px-[1px] text-sm delay-200 ${
                active ? "translate-x-0" : "translate-x-32"
              } ${path == item.path ? "border-main" : "border-transparent"}`}
              href={item.path}
            >
              {item.label}
            </Link>
          ))}
      </div>
      <div className="navbar-languages h-[15%] flex flex-col px-[30px] justify-evenly text-grey-text text-xs bg-accent">
        <div
          className={`rounded-full p-[1px] w-[25px] cursor-pointer aspect-square flex justify-center items-center ${
            isEnglish ? "bg-dark font-semibold" : "bg-main text-dark"
          }`}
          onClick={swapLanguage}
        >
          <span>FR</span>
        </div>
        <div
          className={`rounded-full p-[1px] w-[25px] cursor-pointer aspect-square flex justify-center items-center ${
            !isEnglish ? "bg-dark font-semibold" : "bg-main text-dark"
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
