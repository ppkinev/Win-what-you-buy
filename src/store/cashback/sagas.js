import { take, put, call, fork } from 'redux-saga/effects'
import fetch from '../../services/api'
import {
  GET_CASHBACK_CATEGORIES_REQUEST, getCashbackCategoriesSuccess, getCashbackCategoriesFail,
  GET_CASHBACK_RETAILERS_REQUEST, getCashbackRetailersSuccess, getCashbackRetailersFail,
} from './actions'


export function* getCashbackCategories() {
  try {
    const categories = yield call(fetch, { endpoint: 'cashback/getcategories' })
    yield put(getCashbackCategoriesSuccess(categories.Categories))
  } catch (e) {
    yield put(getCashbackCategoriesFail(e))
  }
}

export function* watchGetCashbackCategories() {
  while (true) {
    yield take(GET_CASHBACK_CATEGORIES_REQUEST)
    yield call(getCashbackCategories)
  }
}

export function* getCashbackRetailers(data) {
  try {
    const retailers = yield call(fetch, { endpoint: 'cashback/getretailers', data })
    yield put(getCashbackRetailersSuccess(retailers.Retailers))
  } catch (e) {
    yield put(getCashbackRetailersFail(e))
  }
}

export function* watchGetCashbackRetailers() {
  while (true) {
    const { payload } = yield take(GET_CASHBACK_RETAILERS_REQUEST)
    yield call(getCashbackRetailers, payload)
  }
}

export default function* () {
  yield fork(watchGetCashbackCategories)
  yield fork(watchGetCashbackRetailers)
}
