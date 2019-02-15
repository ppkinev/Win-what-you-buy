import {
  IS_USER_AUTHORIZED,
  EXTERNAL_PROFILE_UPDATE,
  getUserRequest,
} from './actions'

export default store => next => (action) => {
  const { payload, type } = action

  if (type === IS_USER_AUTHORIZED) {
    return next({
      ...action,
      payload: {
        isUserAuthorized: window._DGPublic.isAuthorized(),
      },
    })
  }

  if (type === EXTERNAL_PROFILE_UPDATE && window._DGPublic.isAuthorized()) {
    store.dispatch(getUserRequest())
  }

  return next(action)
}
