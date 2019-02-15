export const EXTERNAL_SIGN_IN = 'EXTERNAL_SIGN_IN'
export const externalSignIn = () => ({
  type: EXTERNAL_SIGN_IN,
})

export const EXTERNAL_SIGN_OUT = 'EXTERNAL_SIGN_OUT'
export const externalSignOut = () => ({
  type: EXTERNAL_SIGN_OUT,
})

export const EXTERNAL_PROFILE_UPDATE = 'EXTERNAL_PROFILE_UPDATE'
export const externalProfileUpdate = () => ({
  type: EXTERNAL_PROFILE_UPDATE,
})

export const IS_USER_AUTHORIZED = 'IS_USER_AUTHORIZED'
export const checkIfUserAuthorized = () => ({
  type: IS_USER_AUTHORIZED,
})

export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
})

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
})

export const GET_USER_FAIL = 'GET_USER_FAIL'
export const getUserFail = err => ({
  type: GET_USER_FAIL,
  payload: {
    err,
  },
})
