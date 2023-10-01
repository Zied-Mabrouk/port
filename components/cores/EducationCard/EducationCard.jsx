import React from "react";
import "./EducationCard.scss";

const EducationCard = ({ card }) => {
  return (
    <div className="education-card">
      <div>
        <div className="education-card-titles">

        <h1>{card.title}</h1>
      <h2>{card.role}</h2>
        </div>
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
      <p>{card.description}</p>
    </div>
  );
};

export default EducationCard;
