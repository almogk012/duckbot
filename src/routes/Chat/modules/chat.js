export const DUCK_SPEAK = "DUCK_SPEAK";
export const PERSON_SEND_MESSAGE = "PERSON_SEND_MESSAGE";
export const PERSON_TYPING = "PERSON_TYPING";
import {createNewUser,createUserID,setUserName,setUserCountry} from './../../../services/user';
import {createAnswerMessageUser,createQuestionMessageUser,UserPushMessage} from './../../../services/UserMessage';
import {prettyDate2} from './../../../services/general';
import {getMessages,pushMessage} from './../../../services/messages';
import {duckbotAskForCountry, duckbotAskForName,duckbotSayDetails,duckbotAnswerDefault} from './../../../services/DuckbotMessage';
import * as inputTypes from '../inputTypes';
import * as questionsTypes from "../questionsTypes";

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  _currentUser: createNewUser(),
  title_status_navbar: "DUCKBOT is waiting to help",
  valueInput:"",
  messages: getMessages(),
  statusQuestions: questionsTypes.GET_NAME
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
          let msg = createQuestionMessageUser(action.payload.message);
          UserPushMessage(msg);
          return Object.assign({}, state, {
            messages: getMessages()
          });
          break;
        } case inputTypes.ANSWER :{
          console.log("is answer");
          switch(state.statusQuestions){
            case questionsTypes.GET_NAME:{
              console.log("is GET_NAME");
              setUserName(action.payload.message);
              let msg = createAnswerMessageUser(action.payload.message);
              UserPushMessage(msg);
              duckbotAskForCountry();
              state.statusQuestions = questionsTypes.GET_COUNTRY;
              return Object.assign({}, state, {
                messages:  getMessages()
              });
            }
            case questionsTypes.GET_COUNTRY:{
              console.log("is GET_COUNTRY");
              setUserCountry(action.payload.message);
              let msg = createAnswerMessageUser(action.payload.message);
              UserPushMessage(msg);
              duckbotSayDetails();
              state.statusQuestions = questionsTypes.NO_QUESTION;
              return Object.assign({}, state, {
                messages:  getMessages()
              });
            }
            case questionsTypes.NO_QUESTION :{
              let msg = createAnswerMessageUser(action.payload.message);
              UserPushMessage(msg);
              duckbotAnswerDefault();
              return Object.assign({}, state, {
                messages:  getMessages()
              });
            }
          }
        } default : {
          duckbotAnswerDefault();          
          console.log("default input")
        }
      }
      case "@@INIT":{
        duckbotAskForName();
        return Object.assign({}, state, {
          messages:  getMessages()
        });
      }
    default:
   
      return state;
  }
}
