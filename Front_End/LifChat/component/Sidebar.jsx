import React from "react";
import { RxAvatar } from "react-icons/rx";
import { BsChatLeftText, BsSearch } from "react-icons/bs";
import Siderbarchat from "./Siderbarchat";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-primary" style={{ flex: "0.35" }}>
      <div className="d-flex justify-content-between p-2 border border-light" style={{'fontSize':'26px'}}>
        <RxAvatar />
        <div className="d-flex align-items-center min-vw-10 mr-2">
          <BsChatLeftText />
        </div>
      </div>
      <div className="d-flex align-items-center bg-info p-1 h-2">
        <div className="d-flex align-items-center bg-white w-100 rounded-4" style ={{height : "35px"}}>
          <BsSearch className="m-1 text-info"/>
          <input className="m-1 border-0" placeholder="Recherche" type="text" />
        </div>
      </div>
      <div className="bg-white overflow-scroll">
        <Siderbarchat/>
        <Siderbarchat/>
        <Siderbarchat/>
      </div>
    </div>
  );
};

export default Sidebar;
