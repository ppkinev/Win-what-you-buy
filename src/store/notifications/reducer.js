import {
  GET_NEW_NOTIFICATIONS_AMOUNT_REQUEST, GET_NEW_NOTIFICATIONS_AMOUNT_SUCCESS, GET_NEW_NOTIFICATIONS_AMOUNT_FAIL,
  GET_NOTIFICATIONS_REQUEST, GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATIONS_FAIL,
  MARK_NOTIFICATIONS_AS_READ_REQUEST, MARK_NOTIFICATIONS_AS_READ_SUCCESS, MARK_NOTIFICATIONS_AS_READ_FAIL,
} from './actions'
import { initialState } from './selectors'

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case GET_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_NEW_NOTIFICATIONS_AMOUNT_SUCCESS:
      return {
        ...state,
        unread: payload.amount,
      }
    case GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: payload.notifications.map(n => ({
          ...n,
          id: n.Id,
          isUnread: !n.IsRead,
          date: n.Date,
          type: n.NotificationType,
        })),
        isLoading: false,
      }
    case GET_NOTIFICATIONS_FAIL:
      return {
        ...state,
        error: payload.err,
        isLoading: false,
      }
    case MARK_NOTIFICATIONS_AS_READ_SUCCESS:
      return {
        ...state,
      }
    default:
      return {
        ...state,
      }
  }
}
