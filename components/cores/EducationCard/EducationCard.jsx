import React from "react";

const EducationCard = ({ card }) => {
  return (
    <div className="bg-secondary h-[300px] flex flex-col items-center relative p-10 education-card group overflow-hidden  ">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-base leading-none">{card.title}</h1>
        <span className="bg-primary rounded-xl py-1 px-4 text-xs text-grey-text">
          {card.date}
        </span>
      </div>
      {card.thumb && (
        <div
          on
          className="flex items-center h-full justify-center max-w-full absolute top-0 left-0 w-full z-10 opacity-0 group-hover:opacity-100"
        >
          <div className="bg-black h-full mx-auto overflow-hidden relative w-full flex items-center justify-center">
            <img
              className="min-h-full absolute top-0 object-cover opacity-20"
              src={"./img/history/" + card.thumb}
              alt=""
            />
          </div>
        </div>
      )}
      <h2 className="text-grey-text font-medium w-full text-left capitalize">
        {card.role}
      </h2>
      <p className="text-[#b0b0b4] text-[13px] text-justify mt-4 font-thin">
        {card.description}
      </p>
    </div>
  );
};

export default EducationCard;
