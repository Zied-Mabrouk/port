import { useContext } from 'react';
import Button from '../components/cores/Button/Button'
import { LanguageContext } from './_app';


export default function Home() {
  let [language] = useContext(LanguageContext);
  // const home = language['home'];
  console.log(language)
  return (
    <div className="home">
      {/* <div className="home-banner">
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
        </div> */}
      {/* </div> */}
    </div>
  )
}
