import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

let ChatMessages = ({ messages }) => {
  return (
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
                           {messages[key].bot.text}
                         </p>
                         <time className="other-time">{messages[key].bot.time}</time>
                        </div>
                      </li>  : null }
                { messages[key].user ?
                     <li className="self">
                     <time className="self-time">{messages[key].user.time}</time>
                     <div className="avatar">
                       <img src="https://i.imgur.com/HYcn9xO.png" draggable="false" />
                     </div>
                     <div className="msg">
                       <p>
                         {messages[key].user.text}
                       </p>
                     </div>
                     </li> : null }
            </div>
          )
      })
    }
    </ol>
  );
};
const mapStateToProps = state => ({
  messages: state.chat.messages
});

ChatMessages.propTypes = {
  messages: PropTypes.object.isRequired
};

ChatMessages = connect(mapStateToProps)(ChatMessages);

export default ChatMessages;