// ------------------------------------
// Constants
// ------------------------------------
export const DUCK_SPEAK = "DUCK_SPEAK";
export const PERSON_SEND_MESSAGE = "PERSON_SEND_MESSAGE";
export const PERSON_TYPING = "PERSON_TYPING"; 

// ------------------------------------
// Actions
// ------------------------------------

// export const addTodo = text => {
//   return {
//     type: "ADD_TODO",
//     id: nextTodoId++,
//     text
//   };
// };
// export const sendMessage = message => {
//   return {
//     type: PERSON_SPEAK,
//     payload: message
//   };
// };

// export const sendMessage = (a, b, c) => {
//   debugger;
//   return (dispatch, getState) => {
//     dispatch({
//       type: PERSON_SPEAK,
//       payload: getState().userMessage
//     });
//   };
// };

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// export const actions = {
//   sendMessage
// };

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DUCK_SPEAK]: (state, action) => state,
  [PERSON_SEND_MESSAGE]: (state, action) => state
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  title_status_navbar: "DUCKBOT is waiting to help",
  user_input_message: "",
  valueInput:""
};
export default function chatReducer(state = initialState, action) {
  debugger;
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
      return Object.assign({}, state, {
        user_input_message: action.payload,
        title_status_navbar : "DUCKBOT is typing ..."
      });

    default:
      return state;
  }
  // const handler = ACTION_HANDLERS[action.type];

  // return handler ? handler(state, action) : state;
}
