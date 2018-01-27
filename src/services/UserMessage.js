//
// user message service , manage all message from user
//

import * as _ from 'lodash';
import {createID,prettyDate2} from './general';
import {getMessages,pushMessage} from './messages';

let messages = getMessages();
let date = prettyDate2();

export function createQuestionMessageUser(msg,time){
  let numberDialogue = createID();
  return {
    [numberDialogue]: {
      user:{
          text:msg,
          time:time
        }
    }
  }
}
export function createAnswerMessageUser(msg,time){
  let numberDialogue = createID();
  return {
    [numberDialogue]: {
      user:{
          text:msg,
          time:time
        }
    }
  }
}

export function UserPushMessage(message){
  pushMessage(message);
}