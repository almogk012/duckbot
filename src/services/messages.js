import * as _ from 'lodash';
import {duckbotAskForName} from './DuckbotMessage';
let messages = {};

export function getMessages(){
  if(_.isEmpty(messages)){
    duckbotAskForName();
  }
  return Object.assign({},messages);
 }

 export function pushMessage(msg){
  messages = _.merge(messages,msg);
  return Object.assign({},messages);
 }