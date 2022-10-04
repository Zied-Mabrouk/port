import React from "react";
import "./App.scss"
import Home from "./components/modules/Home/Home";
import SideBar from "./components/modules/SideBar/SideBar";

function App() {
  let [selected,setSelected] = React.useState(<Home/>)
  return (
    <div className="app">
      <div className="container">
        <SideBar />
        {selected}
      </div>
    </div>
  );
}

export default App;
