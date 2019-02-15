export const GET_OFFERS_REQUEST = 'GET_OFFERS_REQUEST'
export const getOffersRequest = () => ({
  type: GET_OFFERS_REQUEST,
})

export const GET_OFFERS_SUCCESS = 'GET_OFFERS_SUCCESS'
export const getOffersSuccess = offers => ({
  type: GET_OFFERS_SUCCESS,
  payload: { offers },
})

export const GET_OFFERS_FAIL = 'GET_OFFERS_FAIL'
export const getOffersFail = err => ({
  type: GET_OFFERS_FAIL,
  payload: { err },
})


export const GET_USER_OFFERS_REQUEST = 'GET_USER_OFFERS_REQUEST'
export const getUserOffersRequest = () => ({
  type: GET_USER_OFFERS_REQUEST,
})

export const GET_USER_OFFERS_SUCCESS = 'GET_USER_OFFERS_SUCCESS'
export const getUserOffersSuccess = offers => ({
  type: GET_USER_OFFERS_SUCCESS,
  payload: { offers },
})

export const GET_USER_OFFERS_FAIL = 'GET_USER_OFFERS_FAIL'
export const getUserOffersFail = err => ({
  type: GET_USER_OFFERS_FAIL,
  payload: { err },
})


export const TRACK_OFFER_REQUEST = 'TRACK_OFFER_REQUEST'
export const trackOfferRequest = offerId => ({
  type: TRACK_OFFER_REQUEST,
  payload: { offerId },
})

export const TRACK_OFFER_SUCCESS = 'TRACK_OFFER_SUCCESS'
export const trackOfferSuccess = () => ({
  type: TRACK_OFFER_SUCCESS,
})

export const TRACK_OFFER_FAIL = 'TRACK_OFFER_FAIL'
export const trackOfferFail = err => ({
  type: TRACK_OFFER_FAIL,
  payload: { err },
})


export const COMPLETE_OFFER_REQUEST = 'COMPLETE_OFFER_REQUEST'
export const completeOfferRequest = offerId => ({
  type: COMPLETE_OFFER_REQUEST,
  payload: { offerId },
})

export const COMPLETE_OFFER_SUCCESS = 'COMPLETE_OFFER_SUCCESS'
export const completeOfferSuccess = () => ({
  type: COMPLETE_OFFER_SUCCESS,
})

export const COMPLETE_OFFER_FAIL = 'COMPLETE_OFFER_FAIL'
export const completeOfferFail = err => ({
  type: COMPLETE_OFFER_FAIL,
  payload: { err },
})


export const CANCEL_OFFER_REQUEST = 'CANCEL_OFFER_REQUEST'
export const cancelOfferRequest = offerId => ({
  type: CANCEL_OFFER_REQUEST,
  payload: { offerId },
})

export const CANCEL_OFFER_SUCCESS = 'CANCEL_OFFER_SUCCESS'
export const cancelOfferSuccess = () => ({
  type: CANCEL_OFFER_SUCCESS,
})

export const CANCEL_OFFER_FAIL = 'CANCEL_OFFER_FAIL'
export const cancelOfferFail = err => ({
  type: CANCEL_OFFER_FAIL,
  payload: { err },
})
