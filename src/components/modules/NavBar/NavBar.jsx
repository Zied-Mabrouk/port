import React, { useContext } from "react";
import "./NavBar.scss";
import Languages from "../../../languages.json";
import { LanguageContext } from "../../../App";

const NavBar = ({ active, setActive, setSelected }) => {
  const handleClick = (val) => {
    setSelected(val);
    setActive(false);
  };
  const handleLanguageClick = (val) => {
    if (language === val) return;
    setLanguage(Languages[val]);
  };

  const [language, setLanguage] = useContext(LanguageContext);
  const navItems = language.navItems;
  return (
    <div className={"navbar" + (active ? " active-navbar" : "")}>
      <div className="navbar-header">
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
          >
            <line x1="0" y1="0" x2="50" y2="50" />
            <line x1="50" y1="0" x2="0" y2="50" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 100 80"
            width="20"
            height="20"
            onClick={() => setActive(!active)}
          >
            <rect width="100" height="12"></rect>
            <rect y="30" width="100" height="12"></rect>
            <rect y="60" width="100" height="12"></rect>
          </svg>
        )}
      </div>
      <div className="navbar-items">
        {navItems &&
          navItems.map((item, key) => (
            <span key={key} onClick={() => handleClick(item)}>
              {item}
            </span>
          ))}
      </div>
      <div className="navbar-languages">
        <div
          className={language.type === "FR" ? "active-language" : ""}
          onClick={() => handleLanguageClick("FR")}
        >
          <span>FR</span>
        </div>
        <div
          className={language.type === "EN" ? "active-language" : ""}
          onClick={() => handleLanguageClick("EN")}
        >
          <span>EN</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
