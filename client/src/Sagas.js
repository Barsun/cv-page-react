import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import Client from './Client';
import * as Actions from './Actions'


function* fetchSearchData() {

  const searchData = yield call(Client.search);
  const result = yield put(Actions.changeSearchData(searchData));
  console.log("getSearchData");

  // if it is from a redux-action, we get an object with error set not a thrown error
  if (result !== undefined) {
    const { error } = result;
    if (error) {
      throw result;
    }
  }
  return result;
}

function* watchFetchSearchData(){
  yield* takeEvery("FETCH_SEARCH_DATA", fetchSearchData);
}
export default watchFetchSearchData;
