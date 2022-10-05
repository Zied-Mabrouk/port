import React, { useContext } from "react";
import { LanguageContext } from "../../../App";
import Button from "../../cores/Button/Button";
import "./Home.scss";

const Home = () => {
    let [language] = useContext(LanguageContext)
    const home = language.home;
  return (
    <div className="home">
      <div className="home-banner">
        <div className="home-banner-content">
          <h1>
            {home.bannerTitle}
          </h1>
          <Button title={"Explore Now"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
