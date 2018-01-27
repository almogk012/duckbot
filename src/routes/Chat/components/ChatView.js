import React from "react";
import "./ChatView.scss";
import IconSend from "../assets/ic-send@2x.png";
import UserInput from "./UserInput";
import StatusNavbar from "./StatusNavbar";
import SideBar from "./SideBar";
import ChatMessages from "./ChatMessages";

export const Chat = ({}) => (
  <div className="chat-main">
    <div className="status">
      <StatusNavbar />
    </div>
    <div className="sidebar">
      <SideBar />
    </div>
    <div className="main">
     <ChatMessages/>
    </div>
      <UserInput />
  </div>
);

export default Chat;
