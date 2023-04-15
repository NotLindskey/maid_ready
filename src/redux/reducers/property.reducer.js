import { combineReducers } from "redux";

const properties = (state = [], action) => {
    if (action.type === 'SET_PROPERTIES') {
        return action.payload;
      }
      return state;
  };

  const property = (state = {}, action) => {
    if (action.type === 'SET_PROPERTY') {
        return action.payload;
      }
      return state;
  };
  
  export default combineReducers({
    properties,
    property,
  });