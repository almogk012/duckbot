import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IconSend from "../assets/ic-send@2x.png";

let UserInput = ({ sendMessage, typingMessage, valueInput }) => {
  let input;

  return (
    <div className="user-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          sendMessage(input.value);
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
          className="user-input"
          type="text"
          placeholder=" Say something ... "
          value={valueInput}
          onChange={e => {
            e.preventDefault();
            typingMessage(input.value);
          }}
        />
        <button type="submit" className="user-btn">
          <img src={IconSend} width="20" height="20" alt="icon-send" />
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    sendMessage: message =>
      dispatch({
        type: "PERSON_SEND_MESSAGE",
        payload: message
      }),
    typingMessage: input =>
      dispatch({
        type: "PERSON_TYPING",
        payload: input
      })
  };
};

const mapStateToProps = state => ({
  valueInput: state.chat.valueInput,
  _currentUser: state.chat._currentUser
});
UserInput.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  typingMessage: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
