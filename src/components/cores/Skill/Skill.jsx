import React from "react";
import "./Skill.scss";
import Aos from "aos";

const Skill = ({ level, title }) => {
  // React.useEffect(() => {
  //   Aos.init({ duration: 1000, delay: 200 });
  // }, []);
  return (
    <div className="skill" 
    // data-aos="fade-up" data-aos-once="true"
    >
      <img src={"./img/skills/" + title + ".svg"} alt={"g"} />
      <h2>{title}</h2>
      <p>{level}</p>
    </div>
  );
};

export default Skill;
