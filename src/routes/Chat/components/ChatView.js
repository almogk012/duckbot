import React from "react";
import PropTypes from "prop-types";
import "./ChatView.scss";
import IconSend from "../assets/ic-send@2x.png";
import UserInput from "./UserInput";
import StatusNavbar from "./StatusNavbar";
import SideBar from "./SideBar";

export const Chat = ({messages}) => (
  <div className="chat-main">
    <div className="status">
      <StatusNavbar />
    </div>
    <div className="sidebar">
      <SideBar />
    </div>
    <div className="main">
      <ol className="chat">
      {
        Object.keys(messages).map(function(key,i){
            return ( 
              <div key={"Dialogue number " + i}>
                  { messages[key].bot ?   
                       <li className="other">
                       <div className="avatar">
                         <div className="image-duckbot" />
                       </div>
                         <div className="msg">
                           <p>
                           {messages[key].bot[0].text}
                           </p>
                           <time className="other-time">{messages[key].bot[0].time}</time>
                          </div>
                        </li>  : null }
                  { messages[key].user ?
                       <li className="self">
                       <time className="self-time">{messages[key].user[0].time}</time>
                       <div className="avatar">
                       <img src="https://i.imgur.com/HYcn9xO.png" draggable="false" />
                       </div>
                       <div className="msg">
                        <p>
                          {messages[key].user[0].text}
                        </p>
                       </div>
                       </li> : null }
              </div>
            )
        })
      }
      </ol>
    </div>
    <UserInput />
  </div>
);
Chat.propTypes = {
  messages: PropTypes.object.isRequired
};

export default Chat;
