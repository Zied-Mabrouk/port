import React from "react";

const ProgressBar = ({ label, percentage }) => {
  var [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const inter = setInterval(() => {
      setCount((count) => {
        if (percentage <= count) {
          clearInterval(inter);
          return percentage;
        } else {
          return count + 1;
        }
      });
      if (percentage <= count) clearInterval(inter);
    }, 10);
    return () => clearInterval(inter);
  }, [percentage]);
  return (
    <div className="relative w-14 flex items-center flex-col gap-2">
      <div className="absolute top-0 h-14 flex items-center text-xs text-main">
        <span>{count + "%"}</span>
      </div>
      <svg viewBox="0 0 100 100">
        <path
          d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
          stroke="#191923"
          strokeWidth="7"
          fillOpacity="0"
        ></path>
        <path
          d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
          strokeWidth="7"
          fillOpacity="0"
          className={"stroke-main path-" + percentage}
        ></path>
      </svg>
      <h2 className="text-xs">{label}</h2>
    </div>
  );
};

export default ProgressBar;
