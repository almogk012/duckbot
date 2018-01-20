import React from "react";
import { connect } from "react-redux";

let SideBar = ({ dispatch }) => {
  return (
    <div className="container">
      <div className="container-duckbot">
        <div className="image-duckbot" />
      </div>
      <div className="title">Duckbot</div>
      <div className="sub-title">The Debugging bot</div>
    </div>
  );
};
SideBar = connect()(SideBar);

export default SideBar;
