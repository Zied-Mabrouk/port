import React from "react";
import "./Skill.scss";

const Skill = ({ level, title }) => {
  return (
    <div className="skill">
      <img src={"./img/skills/" + title + ".svg"} alt={"g"} />
      <h2>{title}</h2>
      <p>{level}</p>
    </div>
  );
};

export default Skill;
