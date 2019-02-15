export const GET_CASHBACK_CATEGORIES_REQUEST = 'GET_CASHBACK_CATEGORIES_REQUEST'
export const getCashbackCategoriesRequest = () => ({
  type: GET_CASHBACK_CATEGORIES_REQUEST,
})

export const GET_CASHBACK_CATEGORIES_SUCCESS = 'GET_CASHBACK_CATEGORIES_SUCCESS'
export const getCashbackCategoriesSuccess = categories => ({
  type: GET_CASHBACK_CATEGORIES_SUCCESS,
  payload: {
    categories,
  },
})

export const GET_CASHBACK_CATEGORIES_FAIL = 'GET_CASHBACK_CATEGORIES_FAIL'
export const getCashbackCategoriesFail = err => ({
  type: GET_CASHBACK_CATEGORIES_FAIL,
  payload: {
    err,
  },
})


export const GET_CASHBACK_RETAILERS_REQUEST = 'GET_CASHBACK_RETAILERS_REQUEST'
export const getCashbackRetailersRequest = ({ categoryId, query, skip, take, sortAsc }) => ({
  type: GET_CASHBACK_RETAILERS_REQUEST,
  payload: {
    categoryId, query, skip, take, sortAsc,
  },
})

export const GET_CASHBACK_RETAILERS_SUCCESS = 'GET_CASHBACK_RETAILERS_SUCCESS'
export const getCashbackRetailersSuccess = retailers => ({
  type: GET_CASHBACK_RETAILERS_SUCCESS,
  payload: {
    retailers,
  },
})

export const GET_CASHBACK_RETAILERS_FAIL = 'GET_CASHBACK_RETAILERS_FAIL'
export const getCashbackRetailersFail = err => ({
  type: GET_CASHBACK_RETAILERS_FAIL,
  payload: {
    err,
  },
})
