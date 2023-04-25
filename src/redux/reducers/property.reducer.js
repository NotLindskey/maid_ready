import { combineReducers } from "redux";

// select all properties
const properties = (state = [], action) => {
    if (action.type === 'SET_PROPERTIES') {
        return action.payload;
      }
      return state;
  };

  // select specific property
  const property = (state = {}, action) => {
    if (action.type === 'SET_PROPERTY') {
        return action.payload;
      }
      return state;
  };
  
  export default combineReducers({
    properties, // all properties
    property,// specific property
  });