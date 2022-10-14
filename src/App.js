import React from "react";
import "./App.scss";
import Contact from "./components/modules/Contact/Contact";
import Experience from "./components/modules/Experience/Experience";
import History from "./components/modules/History/History";
import Home from "./components/modules/Home/Home";
import NavBar from "./components/modules/NavBar/NavBar";
import SideBar from "./components/modules/SideBar/SideBar";
import Languages from "./languages.json";

export const LanguageContext = React.createContext();

function App() {
  let [active, setActive] = React.useState(false);
  let [main, setMain] = React.useState(<Home />);
  let [selected, setSelected] = React.useState("Home")
  let [language, setLanguage] = React.useState(Languages.EN);
  React.useEffect(() => {
    switch (selected) {
      case language.navItems[0]:
        setMain(<Home />);
        break;
      case language.navItems[1]:
        setMain(<Experience />);
        break;
      case language.navItems[2]:
        setMain(<History />);
        break;
      case language.navItems[3]:
        setMain(<Contact />);
        break;

      default:
        setMain(<Home />);
        break;
    }
  }, [selected,language]);
  return (
    <LanguageContext.Provider value={[language,setLanguage]}>
      <div className="app">
        <div className="container">
          <SideBar />
          <div
            className={"page-content" + (active ? " page-content-active" : "")}
            onClick={() => setActive(false)}
          >
            {main}
          </div>
          <NavBar
            active={active}
            setActive={setActive}
            setSelected={setSelected}
            selected={selected}
          />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
