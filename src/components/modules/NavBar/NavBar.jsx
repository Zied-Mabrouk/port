import React from "react";
import "./NavBar.scss";

const NavBar = ({ active, setActive, setSelected }) => {
  const handleClick = (val)=>{
    setSelected(val)
    setActive(false)
  }
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
        <span onClick={()=>handleClick("Home")}>Home</span>
        <span onClick={()=>handleClick("Experience")}>Experience</span>
        <span onClick={()=>handleClick("History")}>History</span>
        <span onClick={()=>handleClick("Contact")}>Contact</span>
      </div>
      <div className="navbar-languages"></div>
    </div>
  );
};

export default NavBar;
