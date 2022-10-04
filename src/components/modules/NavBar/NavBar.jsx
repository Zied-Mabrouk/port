import React from "react";
import "./NavBar.scss";

const NavBar = ({ active, setActive }) => {
  return (
    <div className={"navbar" + (active ? " active-navbar" : "")}>
      <button onClick={() => setActive(!active)}>click</button>
      <div className="navbar-header">
        <svg viewBox="0 0 100 80" width="20" height="20">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
