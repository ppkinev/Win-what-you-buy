import { take, put, call, fork } from 'redux-saga/effects'
import { getAppFail, getAppSuccess, GET_APP_REQUEST } from './actions'


export function* getApp() {
  try {
    // const app = yield call(xdmFetch, { endpoint: 'app/getapp' })
    const app = {
      AppTitle: 'Win What You Buy',
      FoundationName: 'FoundationName',
      FoundationRewardsSiteUrl: 'FoundationRewardsSiteUrl',
      IsActive: true,
    }
    yield put(getAppSuccess(app))
  } catch (e) {
    yield put(getAppFail(e))
  }
}

export function* watchGetApp() {
  while (true) {
    yield take(GET_APP_REQUEST)
    yield call(getApp)
  }
}

export default function* () {
  // yield fork(watchPostMessageListen)
  yield fork(watchGetApp)
}
