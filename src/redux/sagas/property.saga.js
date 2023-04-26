import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetch all properties
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

  // fetch property by id
  function* fetchProperty(action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      const response = yield axios.get(`/api/properties/${action.payload.id}`, config);
      yield put({ type: 'SET_PROPERTY', payload: response.data[0] });
    } catch (error) {
      console.log('This property get request failed', error);
    }
  }

  // add new property
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

  // delete a property
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
  
  // update a property
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

  // watcher function
  function* propertySaga() {
    yield takeLatest('FETCH_PROPERTIES', fetchProperties); // GET all properties
    yield takeLatest('FETCH_PROPERTY', fetchProperty); // GET a specific property
    yield takeLatest('ADD_PROPERTY', addProperty); // ADD a property
    yield takeLatest('DELETE_PROPERTY', deleteProperty); // DELETE a property
    yield takeLatest('UPDATE_PROPERTY', updateProperty); // UPDATE a property
  }

  export default propertySaga;