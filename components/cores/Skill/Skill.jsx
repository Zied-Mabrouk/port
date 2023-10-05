import Image from "next/image";
import React from "react";

const Skill = ({ level, label }) => {
  return (
    <div className="bg-skill rounded-xl py-2 px-1 mb-2 gap-[2px] overflow-hidden flex flex-col items-center h-28 max-h-[112px]">
      <div className="relative w-[60%] mx-auto">
        <Image
          width={50}
          height={50}
          src={"./img/skills/" + label + ".svg"}
          alt={label + "'s image"}
          className="mx-auto h-14"
        />
      </div>
      <h2
        title={label}
        className="text-[11px] whitespace-nowrap w-full text-center overflow-hidden overflow-ellipsis"
      >
        {label}
      </h2>
      <p className=" text-grey-text text-[10px]">{level}</p>
    </div>
  );
};

export default Skill;
