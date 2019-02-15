import { initialState } from './selectors'
import {
  IS_USER_AUTHORIZED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,

  EXTERNAL_SIGN_IN,
  EXTERNAL_SIGN_OUT,
} from './actions'

import { numToFixed } from '../../services/helpers'

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case IS_USER_AUTHORIZED:
      return {
        ...state,
        isUserAuthorized: payload.isUserAuthorized,
      }
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: payload.UserId,
        image: payload.ImageUrl,
        name: payload.UserName,
        points: payload.Wallet.PointsConfirmed,
        credits: Number(numToFixed(payload.Wallet.CreditsConfirmed, 2)),
      }
    case GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.err,
      }
    case EXTERNAL_SIGN_IN:
      return {
        ...state,
        isUserAuthorized: true,
      }
    case EXTERNAL_SIGN_OUT:
      return {
        ...initialState,
      }
    default:
      return { ...state }
  }
}
