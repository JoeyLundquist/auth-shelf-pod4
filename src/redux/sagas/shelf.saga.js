import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';


function* getShelf() {
    try {
        const items = yield axios.get('/api/shelf');
        yield put ({
            type: 'SET_SHELF',
            payload: items.data
        })
    }
    catch (err) {
        console.log(`Error in getShelf`, err);
    }
};
function* addItem(action) {
    try {
        const item = yield axios.post('/api/shelf', action.payload);
        yield put ({
            type:'FETCH_SHELF'
        })
    }
    catch(error) {
        console.log('Failed to POST', error)
    }
}

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', getShelf);
    yield takeLatest('ADD_ITEM', addItem);
  }

export default shelfSaga;