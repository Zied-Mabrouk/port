import React from "react";

const Button = ({ title }) => {
  return (
    <button className="w-fit bg-main py-3 px-9 tracking-[1.5px] text-sm text-secondary font-medium uppercase">
      {title}
    </button>
  );
};

export default Button;
