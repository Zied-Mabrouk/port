import React from "react";
import ProgressBar from "../../cores/ProgressBar/ProgressBar";
import Skill from "../../cores/Skill/Skill";
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
      <div className="sidebar-languages">
        <ProgressBar percentage={100} title={"french"} />
        <ProgressBar percentage={90} title={"arabic"} />
        <ProgressBar percentage={80} title={"english"} />
      </div>
      <div className="sidebar-skills" >
        <Skill level={'Advanced'} title={"Java"}  />
        <Skill level={"Advanced"} title={"HTML"}  />
        <Skill level={"Advanced"} title={"CSS"}  />
        <Skill level={"Advanced"} title={"Javascript"} />
        <Skill level={"Advanced"} title={"PHP"}  />
        <Skill level={"Advanced"} title={"SQL"}  />
        <Skill level={"Intermediate"} title={"C++"}  />
        <Skill level={"Intermediate"} title={"Symfony"}  />
        <Skill level={"Intermediate"} title={"Python"}  />
        <Skill level={"Advanced"} title={"React"}  />
        <Skill level={"Basic"} title={"Angular"}  />
      </div>
    </div>
  );
};

export default SideBar;
