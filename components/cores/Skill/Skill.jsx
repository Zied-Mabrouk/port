import Image from "next/image";
import React from "react";

const Skill = ({ level, label }) => {
  return (
    <div className="bg-skill rounded-xl py-2 px-1 mb-2 overflow-hidden flex flex-col items-center h-28 max-h-[112px]">
      <Image
        width={100}
        height={100}
        src={"./img/skills/" + label + ".svg"}
        alt={label + "'s image"}
      />
      <h2>{label}</h2>
      <p>{level}</p>
    </div>
  );
};

export default Skill;
