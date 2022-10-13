import React, { useContext } from "react";
import { LanguageContext } from "../../../App";
import Button from "../../cores/Button/Button";
import ServiceCard from "../../cores/ServiceCard/ServiceCard";
import "./Home.scss";

const Home = () => {
  let [language] = useContext(LanguageContext);
  const home = language.home;
  return (
    <div className="home">
      <div className="home-banner">
        <div className="home-banner-content">
          <h1>{home.bannerTitle}</h1>
          <Button title={home.button} />
        </div>
      </div>
      <div className="home-services">
        <h1 className="home-services-title"> {home.services.title}</h1>
        <div className="home-services-cards">
          {home.services.cards.map((service, key) => (
            <ServiceCard key={key} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
