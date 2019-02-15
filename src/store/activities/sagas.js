import { take, put, call, fork } from 'redux-saga/effects'
import fetch from '../../services/api'
import {
  GET_ALL_ACTIVITIES_REQUEST, getAllActivitiesSuccess, getAllActivitiesFail,
  GET_PERSONAL_ACTIVITIES_REQUEST, getPersonalActivitiesSuccess, getPersonalActivitiesFail,
} from './actions'

export function* getAllActivities(data) {
  try {
    const { Activities } = yield call(fetch, { endpoint: 'activity/getallactivities', data })
    yield put(getAllActivitiesSuccess(Activities))
  } catch (e) {
    yield put(getAllActivitiesFail(e))
  }
}

export function* watchGetAllActivities() {
  while (true) {
    const { payload } = yield take(GET_ALL_ACTIVITIES_REQUEST)
    yield call(getAllActivities, payload)
  }
}


export function* getPersonalActivities(data) {
  try {
    const { Activities } = yield call(fetch, { endpoint: 'activity/getuseractivities', data })
    yield put(getPersonalActivitiesSuccess(Activities))
  } catch (e) {
    yield put(getPersonalActivitiesFail(e))
  }
}

export function* watchGetPersonalActivities() {
  while (true) {
    const { payload } = yield take(GET_PERSONAL_ACTIVITIES_REQUEST)
    yield call(getPersonalActivities, payload)
  }
}

export default function* () {
  yield fork(watchGetAllActivities)
  yield fork(watchGetPersonalActivities)
}
