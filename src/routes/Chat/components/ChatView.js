import React from "react";
import PropTypes from "prop-types";
import "./ChatView.scss";
import IconSend from "../assets/ic-send@2x.png";
import UserInput from "./UserInput";
import StatusNavbar from "./StatusNavbar";
import SideBar from "./SideBar";

export const Chat = ({}) => (
  <div className="chat-main">
    <div className="status">
      <StatusNavbar />
    </div>
    <div className="sidebar">
      <SideBar />
    </div>
    <div className="main">
      <ol className="chat">
        <li className="other">
          <div className="avatar">
            <div className="image-duckbot" />
          </div>
          <div className="msg">
            <p>
              Your bones don't break, mine do. That's clear. Your cells react to
              bacteria and viruses differently than mine. You don't get sick, I
              do. That's also clear.
            </p>
            <time className="other-time">20:17</time>
          </div>
        </li>
        <li className="self">
          <time className="self-time">20:18</time>
          <div className="avatar">
            <img src="https://i.imgur.com/HYcn9xO.png" draggable="false" />
          </div>
          <div className="msg">
            <p>
              Your bones don't break, mine do. That's clear. Your cells react to
              bacteria and viruses differently than mine. You don't get sick, I
              do. That's also clear.
            </p>
          </div>
        </li>
        <li className="other">
          <div className="avatar">
            <div className="image-duckbot" />
          </div>
          <div className="msg">
            <p>Hello ! Hello</p>
            <time className="other-time">20:17</time>
          </div>
        </li>
        <div className="day">Hoy</div>
        <li className="self">
          <time className="self-time">18:03</time>
          <div className="avatar">
            <img src="https://i.imgur.com/HYcn9xO.png" draggable="false" />
          </div>
          <div className="msg">
            <p>
              Your bones don't break, mine do. That's clear. Your cells react to
              bacteria and viruses differently than mine. You don't get sick, I
              do. That's also clear.
            </p>
          </div>
        </li>
        <li className="other">
          <div className="avatar">
            <div className="image-duckbot" />
          </div>
          <div className="msg">
            <p>Venga va, hace ya mucho que no juego...</p>
            <time className="other-time">18:07</time>
          </div>
        </li>
      </ol>
    </div>
    <UserInput />
  </div>
);
// Chat.propTypes = {
//   chat: PropTypes.string.isRequired,
//   title_status_navbar: PropTypes.string.isRequired
// };

export default Chat;
