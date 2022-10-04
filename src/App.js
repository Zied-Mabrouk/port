import React from "react";
import "./App.scss"
import Home from "./components/modules/Home/Home";
import NavBar from "./components/modules/NavBar/NavBar";
import SideBar from "./components/modules/SideBar/SideBar";

function App() {
  let [active, setActive] = React.useState(false);
  let [selected, setSelected] = React.useState(<Home />)
  return (
    <div className="app">
      <div className="container">
        <SideBar />
        <div className={"page-content" + (active ? " page-content-active" : "")}>
          {selected}
        </div>
        <NavBar active={active} setActive={setActive} />
      </div>
    </div>
  );
}

export default App;
