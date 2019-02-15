import { initialState } from './selectors'
import {
  GET_CASHBACK_CATEGORIES_REQUEST,
  GET_CASHBACK_CATEGORIES_SUCCESS,
  GET_CASHBACK_CATEGORIES_FAIL,
  GET_CASHBACK_RETAILERS_REQUEST,
  GET_CASHBACK_RETAILERS_SUCCESS,
  GET_CASHBACK_RETAILERS_FAIL,
} from './actions'

function normalizedRetailers(retailers) {
  return retailers.map(ret => ({
    id: String(ret.Id),
    image: ret.ImageUrl,
    cashbackUrl: ret.CashbackUrl,
    url: ret.Url,
    name: ret.Name,
    comissionValue: ret.CommissionValue,
    comissionType: ret.CommissionType,
    isFeatured: ret.IsFeatured,
  }))
}

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case GET_CASHBACK_CATEGORIES_REQUEST:
      return {
        ...state,
        isCategoriesLoading: true,
      }
    case GET_CASHBACK_CATEGORIES_SUCCESS:
      return {
        ...state,
        isCategoriesLoading: false,
        categories: payload.categories.map(cat => ({
          id: cat.Id,
          order: cat.DisplayOrder,
          value: cat.Name,
        })).concat([{
          id: 'all',
          value: 'All',
          order: 0,
        }]).sort((a, b) => a.order - b.order),
      }
    case GET_CASHBACK_CATEGORIES_FAIL:
    case GET_CASHBACK_RETAILERS_FAIL:
      return {
        ...state,
        isCategoriesLoading: false,
        isRetailersLoading: false,
        error: payload.err,
      }
    case GET_CASHBACK_RETAILERS_REQUEST:
      return {
        ...state,
        isRetailersLoading: true,
        isAdding: payload.skip > 0,
      }
    case GET_CASHBACK_RETAILERS_SUCCESS:
      return {
        ...state,
        isRetailersLoading: false,
        retailers: state.isAdding ?
          state.retailers.concat(normalizedRetailers(payload.retailers))
          : normalizedRetailers(payload.retailers),
      }
    default:
      return { ...state }
  }
}
