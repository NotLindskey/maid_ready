import { combineReducers } from "redux";

// select ALL jobs
function jobs(state = [], action) {
  switch (action.type) {
    case "SET_JOBS":
        if(action.payload){
            return action.payload;
        }
      return [];
    case "RESET_JOBS":
      return [];
    case "RESET":
      return [];
    default:
      return state;
  }
}

// select job by ID
function job(state = {}, action) {
  switch (action.type) {
    case "SET_JOB":
      return action.payload;
    case "RESET_JOB":
      return [];
    case "RESET":
      return [];
    default:
      return state;
  }
}

export default combineReducers({
  jobs, // all jobs
  job, // job by id
});
