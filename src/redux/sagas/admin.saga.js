import { put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

function* adminSaga() {
    yield takeEvery('DELETE_USER', deleteUser);
}

//using POST route so we can send back multiple pieces of data
function* deleteUser(action) {
    try {
        yield axios.post('/api/user/deleteUser', action.payload);

    }catch(error) {
        console.log('error in deleteAdmin', error);
    }
}

export default adminSaga;