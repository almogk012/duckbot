//
// duckbot message service , manage the logic of the duckbot 
// here need to create answer from the duckbot after user ask question ,
// create questions for name and country from the user .
// after user give the details ,the duckbot will listening for input from user .
import {createID,prettyDate2} from './general';
import {pushMessage} from './messages';
import {getCurrentUser} from './user';

let date = prettyDate2();
let _user = getCurrentUser();

function ID(){
  let id = createID();
  return id;
};
// this method run only the first time the app run .
// initial the state of global messages .
export function duckbotAskForName(){
  let numberDialogue = ID();
   let msg = { 
     [numberDialogue]:{
      bot:{
          text:"Hello , What's is your Name ?",
          time: date
        }
    }
  };
  pushMessage(msg);
};

export function duckbotAskForCountry(){
  let numberDialogue = ID();
  let question = _user.name + ", Where are you from ?"
  return { 
    [numberDialogue]:{
      bot:{
          text:[question],
          time: date
        }
    }
  }
};
// this function need to create logic of answer after user ask question .
export function duckbotAnswerAfterQuestion(){};

// this function will run when the action type is default input .
// example : when user send regaulr message and no question or answer .
export function duckbotAnswerDefault(){
  let numberDialogue = ID();
  
  return { 
    [numberDialogue]:{
      bot:{
          text:"Ga Ga ... :) ",
          time: date
        }
    }
  }
};