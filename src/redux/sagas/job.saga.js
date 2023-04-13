import axios from "axios";
import { put, take, takeLatest } from "redux-saga/effects";

// watcher function
function* jobSaga() {
  yield takeLatest("FETCH_JOBS", fetchJobs);
  yield takeLatest("FETCH_JOB", fetchJob);

  yield takeLatest('ADD_JOB', addJob);

  yield takeLatest("FETCH_JOB_DETAIL", fetchJobDetail);

}

// fetch all jobs
function* fetchJobs() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const jobsData = yield axios.get("/api/job");
    yield put({ type: "SET_JOBS", payload: jobsData.data });
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

    yield put({ type: "SET_JOB" });
  } catch (err) {
    console.log("Error with fetching jobs: ", err);
  }
}

// fetch job detail
function* fetchJobDetail(action) {
  try {
    const jobDetail = yield axios.get(`/api/job/detail/${action.payload.id}`);
    yield put({ type: "SET_JOB_DETAIL", payload: jobDetail.data[0] });
  } catch (err) {
    console.log("Error with getting job detail: ", err);
  }
}

// post job
function* addJob(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    console.log(action.payload)
    const response = yield axios.post('/api/job', action.payload, config)
    
  } catch (err) {
    console.log("Error with posting jobs: ", err);
  }
}

export default jobSaga;
