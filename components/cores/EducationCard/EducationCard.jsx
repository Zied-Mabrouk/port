import React from "react";

const EducationCard = ({ card }) => {
  return (
    <div className="bg-secondary h-[300px] flex flex-col items-center relative p-10 education-card group overflow-y-auto  ">
      <div className="flex items-center justify-between w-full gap-1">
        <h1 className="text-base leading-none">{card.title}</h1>
        <span className="bg-primary rounded-xl py-1 px-4 text-xs text-grey-text">
          {card.date}
        </span>
      </div>
      <h2 className="text-grey-text font-medium w-full mt-1 text-left capitalize">
        {card.role}
      </h2>
      <ul className="pt-4 pl-4">
        {card.tasks.map((task, index) => (
          <li
            key={index}
            style={{listStyleType: "circle"}}
            className="text-[#b0b0b4] text-[13px] text-justify font-thin"
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
