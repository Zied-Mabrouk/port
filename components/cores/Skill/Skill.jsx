import Image from "next/image";
import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="bg-skill py-2 px-1 gap-[2px] overflow-hidden flex flex-col items-center h-24 max-h-[112px]">
      <div className="relative w-[60%] mx-auto">
        <Image
          width={50}
          height={50}
          src={"./img/skills/" + skill.toLowerCase() + ".svg"}
          alt={skill + "'s image"}
          className="mx-auto h-14"
        />
      </div>
      <p className=" text-white text-[10px] text-center leading-none mx-auto capitalize">
        {skill}
      </p>
    </div>
  );
};

export default Skill;
