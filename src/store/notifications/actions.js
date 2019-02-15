export const GET_NEW_NOTIFICATIONS_AMOUNT_REQUEST = 'GET_NEW_NOTIFICATIONS_AMOUNT_REQUEST'
export const getNewNotificationsAmountRequest = () => ({
  type: GET_NEW_NOTIFICATIONS_AMOUNT_REQUEST,
})

export const GET_NEW_NOTIFICATIONS_AMOUNT_SUCCESS = 'GET_NEW_NOTIFICATIONS_AMOUNT_SUCCESS'
export const getNewNotificationsAmountSuccess = amount => ({
  type: GET_NEW_NOTIFICATIONS_AMOUNT_SUCCESS,
  payload: {
    amount,
  },
})

export const GET_NEW_NOTIFICATIONS_AMOUNT_FAIL = 'GET_NEW_NOTIFICATIONS_AMOUNT_FAIL'
export const getNewNotificationsAmountFail = err => ({
  type: GET_NEW_NOTIFICATIONS_AMOUNT_FAIL,
  payload: {
    err,
  },
})


export const GET_NOTIFICATIONS_REQUEST = 'GET_NOTIFICATIONS_REQUEST'
export const getNotificationsRequest = ({ skip, take }) => ({
  type: GET_NOTIFICATIONS_REQUEST,
  payload: {
    skip, take,
  },
})

export const GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS'
export const getNotificationsSuccess = notifications => ({
  type: GET_NOTIFICATIONS_SUCCESS,
  payload: {
    notifications,
  },
})

export const GET_NOTIFICATIONS_FAIL = 'GET_NOTIFICATIONS_FAIL'
export const getNotificationsFail = err => ({
  type: GET_NOTIFICATIONS_FAIL,
  payload: {
    err,
  },
})


export const MARK_NOTIFICATIONS_AS_READ_REQUEST = 'MARK_NOTIFICATIONS_AS_READ_REQUEST'
export const markNotificationsAsReadRequest = ({ ids }) => ({
  type: MARK_NOTIFICATIONS_AS_READ_REQUEST,
  payload: {
    ids,
  },
})

export const MARK_NOTIFICATIONS_AS_READ_SUCCESS = 'MARK_NOTIFICATIONS_AS_READ_SUCCESS'
export const markNotificationsAsReadSuccess = () => ({
  type: MARK_NOTIFICATIONS_AS_READ_SUCCESS,
})

export const MARK_NOTIFICATIONS_AS_READ_FAIL = 'MARK_NOTIFICATIONS_AS_READ_FAIL'
export const markNotificationsAsReadFail = err => ({
  type: MARK_NOTIFICATIONS_AS_READ_FAIL,
  payload: {
    err,
  },
})
