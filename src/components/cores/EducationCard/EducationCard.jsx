import React from "react";
import "./EducationCard.scss";

const EducationCard = ({ card }) => {
  const startDate = card.date.split("-")[0];
  const endDate = card.date.split("-")[1];
  return (
    <div className="education-card">
       <div className="box-inner">
      <div>
        <h1>{card.title}</h1>
        <span>
          {card.date }
        </span>
      
     </div>
      <h2>{card.role}</h2>
      <p>{card.description}</p>
      </div>
    </div>
  );
};

export default EducationCard;
