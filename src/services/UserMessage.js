//
// user message service , manage all message from user
//

import * as _ from 'lodash';
import {createID,prettyDate2} from './general';
import {getMessages,pushMessage} from './messages';

let messages = getMessages();

export function createQuestionMessageUser(msg){
  let date = prettyDate2();
  let numberDialogue = createID();
  return {
    [numberDialogue]: {
      user:{
          text:msg,
          time:date
        }
    }
  }
}
export function createAnswerMessageUser(msg){
  let date = prettyDate2();
  let numberDialogue = createID();
  return {
    [numberDialogue]: {
      user:{
          text:msg,
          time:date
        }
    }
  }
}

export function UserPushMessage(message){
  pushMessage(message);
}