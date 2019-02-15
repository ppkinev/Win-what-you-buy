export const GET_DRAWS_REQUEST = 'GET_DRAWS_REQUEST'
export const getDrawsRequest = ({ upcoming, my, skip, take, sortAsc }) => ({
  type: GET_DRAWS_REQUEST,
  payload: { upcoming, my, skip, take, sortAsc },
})

export const GET_DRAWS_SUCCESS = 'GET_DRAWS_SUCCESS'
export const getDrawsSuccess = draws => ({
  type: GET_DRAWS_SUCCESS,
  payload: { draws },
})

export const GET_DRAWS_FAIL = 'GET_DRAWS_FAIL'
export const getDrawsFail = err => ({
  type: GET_DRAWS_FAIL,
  payload: { err },
})
