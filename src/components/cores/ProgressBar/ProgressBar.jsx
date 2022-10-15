import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ title, percentage }) => {
  var [count, setCount] = React.useState(0);
  const updateCount = () => {
    const inter = setInterval(() => {
      setCount(++count);
      if (percentage <= count) clearInterval(inter);
    }, 10);
  };
  React.useEffect(updateCount, [percentage]);
  return (
    <div className="progressbar">
      <div className="progressbar-content">
        <span>{count + "%"}</span>
      </div>
      <svg viewBox="0 0 100 100">
        <path
          d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
          stroke="#eee"
          strokeWidth="7"
          fillOpacity="0"
        ></path>
        <path
          d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
          stroke="#555"
          strokeWidth="7"
          fillOpacity="0"
          className={"path-" + percentage}
        ></path>
      </svg>
      <h2 className="progressbar-title">{title}</h2>
    </div>
  );
};

export default ProgressBar;
