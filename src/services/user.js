//
// user service 
//
import {createID} from './general';

class User{
  constructor(){
    this.id = "",
    this.name = "",
    this.city = "",
    this.email = "",
    this.country = "",
    this.phone_number = 0
  }
}

let _user = new User();
export function createNewUser(){
  // create ID for each user .
  _user.id = createID();
  return _user;
}
export function getCurrentUser(){
  return _user;
}
export function getUserName(name){
  _user.name = name;

  // here action finish add name .
}