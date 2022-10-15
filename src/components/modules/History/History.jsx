import React from "react";
import { LanguageContext } from "../../../App";
import EducationCard from "../../cores/EducationCard/EducationCard";
import "./History.scss";

const History = () => {
  let [language] = React.useContext(LanguageContext);
  const history = language.history;
  return (
    <div className="history">
      <h1 className="history-title">
        {history.title}
      </h1>
      {
        history.cards.map((card,key)=> <EducationCard key={key} card={card}  />)
      }
    
     
    </div>
  );
};

export default History;
