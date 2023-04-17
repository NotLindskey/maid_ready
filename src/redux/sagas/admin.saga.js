import { put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

function* adminSaga() {
    yield takeEvery('DELETE_USER', deleteUser);
    yield takeEvery('FETCH_ADMINS', getAdmins);
    yield takeEvery('GET_SUGGESTIONS', getSuggestions);
}

//using POST route so we can send back multiple pieces of data
function* deleteUser(action) {
    try {
        yield axios.post('/api/user/deleteUser', action.payload);
    }catch(error) {
        console.log('error in deleteAdmin', error);
    }
}

function* getAdmins() {
    try {
        const admins = yield axios.get('/api/user/getAdmins');
        yield put({type: 'SAVE_ADMINS', payload: admins.data});
    }catch (error) {
        console.log('error in getAdmins', error);
    }
}

function* getSuggestions(action) {
    try {
        const suggestions = yield axios.post(`/api/user/getSuggestions/${action.payload}`);
        yield put({type: 'SAVE_SUGGESTIONS', payload: suggestions.data});
    }catch (error) {
        console.log('error in getSuggestions', error);
    }
}

export default adminSaga;