import { take, put, call, fork } from 'redux-saga/effects'
import fetch from '../../services/api'
import {
  GET_OFFERS_REQUEST, getOffersSuccess, getOffersFail,
  GET_USER_OFFERS_REQUEST, getUserOffersSuccess, getUserOffersFail,
  TRACK_OFFER_REQUEST, trackOfferSuccess, trackOfferFail,
  CANCEL_OFFER_REQUEST, cancelOfferSuccess, cancelOfferFail,
  COMPLETE_OFFER_REQUEST, completeOfferSuccess, completeOfferFail,
} from './actions'

export function* getOffers(data) {
  try {
    const { Offers } = yield call(fetch, { endpoint: 'offer/getoffers', data })
    yield put(getOffersSuccess(Offers))
  } catch (e) {
    yield put(getOffersFail(e))
  }
}

export function* watchGetOffers() {
  while (true) {
    const { payload } = yield take(GET_OFFERS_REQUEST)
    yield call(getOffers, payload)
  }
}


export function* getUserOffers(data) {
  try {
    const { Offers } = yield call(fetch, { endpoint: 'offer/getuseroffers', data })
    yield put(getUserOffersSuccess(Offers))
  } catch (e) {
    yield put(getUserOffersFail(e))
  }
}

export function* watchUserGetOffers() {
  while (true) {
    const { payload } = yield take(GET_USER_OFFERS_REQUEST)
    yield call(getUserOffers, payload)
  }
}


export function* trackOffer(data) {
  try {
    yield call(fetch, { endpoint: 'offer/trackoffer', isPost: true, data })
    yield put(trackOfferSuccess())
  } catch (e) {
    yield put(trackOfferFail(e))
  }
}

export function* watchTrackOffer() {
  while (true) {
    const { payload } = yield take(TRACK_OFFER_REQUEST)
    yield call(trackOffer, payload)
  }
}


export function* completeOffer(data) {
  try {
    yield call(fetch, { endpoint: 'offer/completeoffer', isPost: true, data })
    yield put(completeOfferSuccess())
  } catch (e) {
    yield put(completeOfferFail(e))
  }
}

export function* watchCompleteOffer() {
  while (true) {
    const { payload } = yield take(COMPLETE_OFFER_REQUEST)
    yield call(completeOffer, payload)
  }
}


export function* cancelOffer(data) {
  try {
    yield call(fetch, { endpoint: 'offer/canceloffer', isPost: true, data })
    yield put(cancelOfferSuccess())
  } catch (e) {
    yield put(cancelOfferFail(e))
  }
}

export function* watchCancelOffer() {
  while (true) {
    const { payload } = yield take(CANCEL_OFFER_REQUEST)
    yield call(cancelOffer, payload)
  }
}


export default function* () {
  yield fork(watchGetOffers)
  yield fork(watchUserGetOffers)
  yield fork(watchTrackOffer)
  yield fork(watchCancelOffer)
  yield fork(watchCompleteOffer)
}
