import React from "react";
import Button from "../../cores/Button/Button";
import "./Home.scss";

const Home = ({setActive,active}) => {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="home-banner-content">
          <h1>Discover my Amazing Art Space!</h1>
          <Button title={"Explore Now"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
