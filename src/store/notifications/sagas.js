import { take, put, call, fork } from 'redux-saga/effects'
import fetch from '../../services/api'
import {
  GET_NEW_NOTIFICATIONS_AMOUNT_REQUEST, getNewNotificationsAmountSuccess, getNewNotificationsAmountFail,
  GET_NOTIFICATIONS_REQUEST, getNotificationsSuccess, getNotificationsFail,
  MARK_NOTIFICATIONS_AS_READ_REQUEST, markNotificationsAsReadSuccess, markNotificationsAsReadFail,
} from './actions'

export function* getNewNotificationsAmount() {
  try {
    const { NotifsCount } = yield call(fetch, { endpoint: 'notification/getnewsitenotifscount' })
    yield put(getNewNotificationsAmountSuccess(NotifsCount))
  } catch (e) {
    yield put(getNewNotificationsAmountFail(e))
  }
}

export function* watchGetNewNotificationsAmount() {
  while (true) {
    yield take(GET_NEW_NOTIFICATIONS_AMOUNT_REQUEST)
    yield call(getNewNotificationsAmount)
  }
}

export function* getNotifications(data) {
  try {
    const { Notifications } = yield call(fetch, { endpoint: 'notification/getsitenotifs', data })
    yield put(getNotificationsSuccess(Notifications))
  } catch (e) {
    yield put(getNotificationsFail(e))
  }
}

export function* watchGetNotifications() {
  while (true) {
    const { payload } = yield take(GET_NOTIFICATIONS_REQUEST)
    yield call(getNotifications, payload)
  }
}

export function* markNotificationsAsRead(data) {
  try {
    const result = yield call(fetch, { endpoint: 'notification/marksitenotifsasread', isPost: true, data })
    yield put(markNotificationsAsReadSuccess(result))
  } catch (e) {
    yield put(markNotificationsAsReadFail(e))
  }
}

export function* watchMarkNotificationsAsRead() {
  while (true) {
    const { payload } = yield take(MARK_NOTIFICATIONS_AS_READ_REQUEST)
    yield call(markNotificationsAsRead, payload)
  }
}

export default function* () {
  yield fork(watchGetNewNotificationsAmount)
  yield fork(watchGetNotifications)
  yield fork(watchMarkNotificationsAsRead)
}
