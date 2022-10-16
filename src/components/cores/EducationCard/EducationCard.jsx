import React from "react";
import "./EducationCard.scss";

const EducationCard = ({ card }) => {
  return (
    <div className="education-card">
      <div>
        <h1>{card.title}</h1>
        <span>{card.date}</span>
      </div>
      {
        card.thumb&&
      <div className="thumbnail">
        <div>

        <img src={"./img/history/"+card.thumb} alt="" />
        </div>
      </div>
      }
      <h2>{card.role}</h2>
      <p>{card.description}</p>
    </div>
  );
};

export default EducationCard;
