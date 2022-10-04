import React from "react";
import "./App.scss"
import Contact from "./components/modules/Contact/Contact";
import Experience from "./components/modules/Experience/Experience";
import History from "./components/modules/History/History";
import Home from "./components/modules/Home/Home";
import NavBar from "./components/modules/NavBar/NavBar";
import SideBar from "./components/modules/SideBar/SideBar";

function App() {
  let [active, setActive] = React.useState(false);
  let [selected, setSelected] = React.useState()
  let [main, setMain] = React.useState(<Home />)


  React.useEffect(() => {
    switch (selected) {
      case "Home":
        setMain(<Home />);
        break;
      case "Experience":
        setMain(<Experience />);
        break;
      case "History":
        setMain(<History />);
        break;
      case "Contact":
        setMain(<Contact />);
        break;

      default:
        setMain(<Home />)
        break;
    }
  }, [selected])
  return (
    <div className="app">
      <div className="container">
        <SideBar />
        <div className={"page-content" + (active ? " page-content-active" : "")}
          onClick={() => setActive(false)}
        >
          {main}
        </div>
        <NavBar active={active} setActive={setActive} setSelected={setSelected}  />
      </div>
    </div>
  );
}

export default App;
