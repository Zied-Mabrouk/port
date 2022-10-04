import React from "react";
import ProgressBar from "../../cores/ProgressBar/ProgressBar";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-avatar">
        <img src="./img/me.png" alt="" />
        <h1>Zied Mabrouk</h1>
        <p>
          Web Developer <br />
          UI/UX Designer
        </p>
      </div>
      <div className="sidebar-infos">

        <div>
          <span>Residence</span>
          <span>City</span>
          <span>Age</span>
        </div>

        <div>
          <span>Tunisia</span>
          <span>Ariana</span>
          <span>22</span>
        </div>

      </div>
      <div className="seperator"></div>
      <div className="sidebar-languages">
        <ProgressBar percentage={100} title={"french"} />
        <ProgressBar percentage={90} title={"arabic"} />
        <ProgressBar percentage={80} title={"english"} />
      </div>
      <div className="seperator"></div>
    </div>
  );
};

export default SideBar;
