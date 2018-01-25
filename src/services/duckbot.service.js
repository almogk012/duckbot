//
// DUCKBOT service 
//

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
export function createUserID(){
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  return uuidv4();
}
export function createNewUser(){
  let _user = new User();
  // create ID for each user .
  _user.id = createUserID();
  return _user;
}
export function getUserName(name){
  _user.name = name;

  // here action finish add name .
}