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
      <div className="sidebar-languages seperator">
        <ProgressBar percentage={100} title={"french"} />
        <ProgressBar percentage={90} title={"arabic"} />
        <ProgressBar percentage={80} title={"english"} />
      </div>
      <div className="sidebar-hard-skills seperator">
        <Skill level={"Advanced"} title={"Java"} />
        <Skill level={"Advanced"} title={"HTML"} />
        <Skill level={"Advanced"} title={"CSS"} />
        <Skill level={"Advanced"} title={"Javascript"} />
        <Skill level={"Advanced"} title={"PHP"} />
        <Skill level={"Advanced"} title={"SQL"} />
        <Skill level={"Intermediate"} title={"C++"} />
        <Skill level={"Intermediate"} title={"Symfony"} />
        <Skill level={"Intermediate"} title={"Python"} />
        <Skill level={"Advanced"} title={"React"} />
        <Skill level={"Basic"} title={"Angular"} />
      </div>
      <div className="sidebar-other-skills seperator">
        <Skill level={"Advanced"} title={"Sass"} />
        <Skill level={"Advanced"} title={"Project Management"} />
        <Skill level={"Intermediate"} title={"Scrum"} />
        <Skill level={"Intermediate"} title={"GitHub"} />
      </div>
      <div className="sidebar-contact">
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/zied.mabrouk.1042/">
          <img src="./img/icons/fb.svg" alt="" />
        </a>
      
        <a target="_blank" rel="noreferrer" href="https://github.com/Zied-Mabrouk">
          <img src="./img/icons/github.svg" alt="" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zied-mabrouk-6401bb201/">
          <img src="./img/icons/linkedin.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
