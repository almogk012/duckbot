// ------------------------------------
// Constants
// ------------------------------------
export const DUCK_SPEAK = "DUCK_SPEAK";
export const PERSON_SEND_MESSAGE = "PERSON_SEND_MESSAGE";
export const PERSON_TYPING = "PERSON_TYPING";
import {createNewUser,createUserID,getUserName} from './../../../services/user';
import {createAnswerMessageUser,createQuestionMessageUser,UserPushMessage} from './../../../services/UserMessage';
import {prettyDate2} from './../../../services/general';
import {getMessages,pushMessage} from './../../../services/messages';
import {duckbotAskForName} from './../../../services/DuckbotMessage';
import * as inputTypes from '../inputTypes';

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  _currentUser: createNewUser(),
  title_status_navbar: "DUCKBOT is waiting to help",
  valueInput:"",
  messages: getMessages()
};
export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case "DUCK_SPEAK":
      return Object.assign({}, state, {
      title_status_navbar : "DUCKBOT is typing ..."
    });
    case "PERSON_TYPING":
    return Object.assign({}, state, {
      valueInput: action.payload,
      title_status_navbar : "DUCKBOT is listening ..."
    });
    case "PERSON_SEND_MESSAGE":
      switch (action.payload.inputType) {
        // Here you gonna change the state by user input type
        case inputTypes.QUESTION :{
          console.log("is question");
          let time = prettyDate2();
          let msg = createQuestionMessageUser(action.payload.message,time);
          UserPushMessage(msg);
          return Object.assign({}, state, {
            messages: getMessages()
          });
          break;
        } case inputTypes.ANSWER :{

          console.log("is answer");
          let time = prettyDate2();
          getUserName(action.payload.message);
          let msg = createAnswerMessageUser(action.payload.message,time);
          UserPushMessage(msg);
          return Object.assign({}, state, {
            messages:  getMessages()
          });
        } default : {
          console.log("default input")
        }
      }
    default:
      return state;
  }
  // const handler = ACTION_HANDLERS[action.type];

  // return handler ? handler(state, action) : state;
}
