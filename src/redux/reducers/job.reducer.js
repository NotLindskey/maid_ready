import { combineReducers } from "redux";

// select ALL jobs
function jobs(state = [], action) {
  switch (action.type) {
    case "SET_JOBS":
      if (action.payload) {
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

// get job detail (by id)
function job_detail(state = {}, action) {
  switch (action.type) {
    case "SET_JOB_DETAIL":
      if (action.payload) {
        return action.payload;
      }
      return state;
    case "RESET_JOB_DETAIL":
      return [];
    case "RESET":
      return [];
    default:
      return state;
  }
}

// GET jobs that belong to a user
function user_jobs(state = [], action) {
  switch (action.type) {
    case "SET_USER_JOBS":
      if (action.payload) {
        return action.payload
      }
      return state;
    case "RESET_JOB_DETAIL":
      return [];
    case "RESET":
      return [];
    default:
      return state;
  }
}

function owner_requests(state = [], action) {
  switch (action.type) {
    case "SET_OWNER_REQUESTS":
      if (action.payload) {
        return action.payload;
      }
      return [];
    case "RESET_REQUESTS":
      return [];
    case "RESET":
      return [];
    default:
      return state;
  }
}

function request_detail(state = {}, action) {
  switch (action.type) {
    case "SET_REQUEST_DETAIL":
      if (action.payload) {
        return action.payload;
      }
      return [];
    case "RESET_REQUEST_DETAIL":
      return [];
    case "RESET":
      return [];
    default:
      return state;
  }
}

// GET active jobs
function keeper_active_jobs(state = [], action) {
  switch (action.type) {
    case "SET_ACTIVE_JOBS":
      if (action.payload) {
        return action.payload
      }
      return state;
    case "RESET_ACTIVE_JOBS":
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
  job_detail, // job detail
  user_jobs, // user's jobs
  owner_requests, // owner's requests
  request_detail, // request detail
  keeper_active_jobs, // keepers active jobs
});
