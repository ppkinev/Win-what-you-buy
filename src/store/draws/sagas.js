import { take, put, call, fork } from 'redux-saga/effects'
import fetch from '../../services/api'
import {
  GET_DRAWS_REQUEST, getDrawsSuccess, getDrawsFail,
} from './actions'

export function* getDraws(data) {
  try {
    const { Draws } = yield call(fetch, { endpoint: 'draw/getdraws', data })
    yield put(getDrawsSuccess(Draws))
  } catch (e) {
    yield put(getDrawsFail(e))
  }
}

export function* watchGetDraws() {
  while (true) {
    const { payload } = yield take(GET_DRAWS_REQUEST)
    yield call(getDraws, payload)
  }
}

export default function* () {
  yield fork(watchGetDraws)
}
