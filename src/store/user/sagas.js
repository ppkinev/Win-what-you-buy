import { take, put, call, fork } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import fetch from '../../services/api'
import {
  GET_USER_REQUEST, getUserSuccess, getUserFail,
  externalSignIn, externalSignOut, externalProfileUpdate,
} from './actions'

export function* getUser() {
  try {
    const profile = yield call(fetch, { endpoint: 'user/me' })
    yield put(getUserSuccess(profile))
  } catch (e) {
    yield put(getUserFail(e))
  }
}

export function* watchGetUser() {
  while (true) {
    yield take(GET_USER_REQUEST)
    yield call(getUser)
  }
}

const listenToPostMessage = () => {
  return eventChannel((dispatch) => {
    window.addEventListener('message', (ev) => {
      if (ev.origin === window.location.origin && ev.data.fromWidget) {
        if (ev.data.fromWidget === 'in') {
          // sign in was done in the widget
          dispatch(externalSignIn())
        } else if (ev.data.fromWidget === 'out') {
          // sign out was done in the widget
          dispatch(externalSignOut())
        } else if (ev.data.fromWidget === 'update') {
          // profile info was changed in the widget, retrieving new info
          dispatch(externalProfileUpdate())
        }
      }
    })

    return () => {

    }
  })
}

export function* watchPostMessageListen() {
  const channel = yield call(listenToPostMessage)
  while (true) {
    const action = yield take(channel)
    yield put(action)
  }
}

export default function* () {
  yield fork(watchPostMessageListen)
  yield fork(watchGetUser)
}
