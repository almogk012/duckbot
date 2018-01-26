import * as _ from 'lodash';
export function prettyDate2(){
  var date = new Date();
  var localeSpecificTime = date.toLocaleTimeString();
  return localeSpecificTime.replace(/:\d+ /, ' ');
}

let date = prettyDate2();
let numberDialogue = 0;
let messages = {
  "0":{
    "bot":[
      {
        text:"Hello , What's is your Name ?",
        time: date
      }
    ]
  }
}

export function getMessages(){
 return messages;
}

export function createMessageUser(msg,time){
  numberDialogue = ++numberDialogue;
  return {
    [numberDialogue]: {
      "user":[
        {
          text:msg,
          time:time
        }
      ]
    }
  }
}

export function pushMessage(message){
  messages = _.merge(messages,message);
}