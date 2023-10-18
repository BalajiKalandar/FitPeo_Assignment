import React from "react";
import SideMenu from "./SideMenu";
import Main from "./Main";
import "./common1.css";
import "../App.css"

export default function Dashboard() {
  return (
    
    <div className="Container">
      <div className="SideMenu">
        <SideMenu />
      </div>
      <div className="Main">
        <Main />
      </div>
    </div>
  );
}
