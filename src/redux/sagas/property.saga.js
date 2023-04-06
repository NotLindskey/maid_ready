import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProperties() {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      const response = yield axios.get('/api/properties', config);
      yield put({ type: 'SET_PROPERTIES', payload: response.data });
    } catch (error) {
      console.log('Properties get request failed', error);
    }
  }

  function* fetchProperty(action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      const response = yield axios.get(`/api/properties/${action.payload}`, config);
      yield put({ type: 'SET_PROPERTY', payload: response.data });
    } catch (error) {
      console.log('This property get request failed', error);
    }
  }

  function* addProperty(action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      const response = yield axios.post('/api/properties', action.payload, config);
      yield put({ type: 'FETCH_PROPERTIES'});
    } catch (error) {
      console.log('Add property failed', error);
    }
  }

  function* deleteProperty(action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      const response = yield axios.delete(`/api/properties/${action.payload}`, config);
      yield put({ type: 'FETCH_PROPERTIES'});
    } catch (error) {
      console.log('Delete property failed', error);
    }
  }
  
  function* updateProperty(action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      const response = yield axios.put(`/api/properties/${action.payload.id}`, action.payload, config)
      yield put({ type: 'FETCH_PROPERTIES'});
    } catch (error) {
      console.log('Edit property failed', error);
    }
  }

  function* propertySaga() {
    yield takeLatest('FETCH_PROPERTIES', fetchProperties);
    yield takeLatest('FETCH_PROPERTY', fetchProperty);
    yield takeLatest('ADD_PROPERTY', addProperty);
    yield takeLatest('DELETE_PROPERTY', deleteProperty);
    yield takeLatest('UPDATE_PROPERTY', updateProperty);
  }

  export default propertySaga;