import React from "react";
import ProgressBar from "../../cores/ProgressBar/ProgressBar";
import Skill from "../../cores/Skill/Skill";
import "./SideBar.scss";
import { LanguageContext } from "../../../App";

const SideBar = () => {
  let [language] = React.useContext(LanguageContext);
  const sideBar = language.sideBar;
  return (
    <div className="sidebar">
      <div className="sidebar-avatar">
        <img src="./img/me.png" alt="" />
        <h1>Zied Mabrouk</h1>
        {sideBar.avatar.roles.map((role, key) => (
          <p key={key}>{role}</p>
        ))}
      </div>
      <div className="sidebar-infos">
        <div>
          {sideBar.infos.map((info, key) => (
            <span key={key}> {info.label} </span>
          ))}
        </div>

        <div>
          {sideBar.infos.map((info, key) => (
            <span key={key}> {info.content} </span>
          ))}
        </div>
      </div>
      <div className="sidebar-languages seperator">
        {sideBar.languages.map((language, key) => (
          <ProgressBar
            percentage={language.percentage}
            title={language.label}
            key={key}
          />
        ))}
      </div>
      <div className="sidebar-hard-skills seperator">
        <span className="floater">{sideBar.hardSkillsLabel}</span>
        {sideBar.hardSkills.map((skill, key) => (
          <Skill level={skill.level} title={skill.label} key={key} />
        ))}
      </div>
      <div className="sidebar-other-skills seperator">
        <span className="floater">{sideBar.otherSkillsLabel}</span>
        {sideBar.otherSkills.map((skill, key) => (
          <Skill level={skill.level} title={skill.label} key={key} />
        ))}
      </div>
      <div className="sidebar-contact">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/zied.mabrouk.1042/"
        >
          <img src="./img/icons/fb.svg" alt="" />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Zied-Mabrouk"
        >
          <img src="./img/icons/github.svg" alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/zied-mabrouk-6401bb201/"
        >
          <img src="./img/icons/linkedin.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
