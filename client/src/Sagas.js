import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import Client from './Client';
import * as Actions from './Actions'


function* fetchData() {


  const profile = yield call(Client.profile);
  const personal = yield call(Client.personal);
  const workExperience = yield call(Client.workExperience);
  const education = yield call(Client.education);
  const skills = yield call(Client.skills);

  let collectionObj = new DataCollection(personal, profile, workExperience, education, skills);

  const result = yield put(Actions.changeSearchData(collectionObj));

  // if it is from a redux-action, we get an object with error set not a thrown error
  if (result !== undefined) {
    const { error } = result;
    if (error) {
      throw result;
    }
  }
  return result;
}

function* watchFetchData(){
  yield* takeEvery("FETCH_DATA", fetchData);
}
export default watchFetchData;


class DataCollection {
    constructor(personal, profile, workExperience, education, skills) {
        this.profile = profile;
        this.personal = personal;
        this.workExperience = workExperience;
        this.education = education;
        this.skills = skills;
    }
}