import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// watcher function
function* jobSaga() {
  yield takeLatest("FETCH_JOBS", fetchJobs);
  yield takeLatest("FETCH_JOB", fetchJob);
}

// fetch all jobs
function* fetchJobs() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    yield put({ type: 'SET_JOBS'});
  } catch (err) {
    console.log("Error with fetching jobs: ", err);
  }
}

// fetch job by id
function* fetchJob() {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
  
      yield put({ type: 'SET_JOB'});
    } catch (err) {
      console.log("Error with fetching jobs: ", err);
    }
}

export default jobSaga;
