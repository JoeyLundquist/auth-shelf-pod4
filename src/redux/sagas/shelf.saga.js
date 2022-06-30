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

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', getShelf);
  }

export default shelfSaga;