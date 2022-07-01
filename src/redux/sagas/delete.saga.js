import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//payload contains the id and the user id
//action is the object that has all the commands and data
function* deleteItem(action){
    try {
        yield axios.delete(`/api/shelf/${action.payload.id}`)
        yield put ({
            type:'FETCH_SHELF'
        })
    }
    catch(err) {
        console.log("o jezz", err)
    }
}

function* deleteSaga(){
    yield takeLatest('DELETE_ITEM', deleteItem)
}
export default deleteSaga