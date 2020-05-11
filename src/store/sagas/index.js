import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

// Below code is only for reference 

function* incrementAsync() {
  yield put({ type: 'INCREMENT_REQUESTED' });
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ]);
}
