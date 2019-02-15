export const GET_ALL_ACTIVITIES_REQUEST = 'GET_ALL_ACTIVITIES_REQUEST'
export const getAllActivitiesRequest = ({ take, skip, sortAsc }) => ({
  type: GET_ALL_ACTIVITIES_REQUEST,
  payload: { skip, take, sortAsc },
})

export const GET_ALL_ACTIVITIES_SUCCESS = 'GET_ALL_ACTIVITIES_SUCCESS'
export const getAllActivitiesSuccess = activities => ({
  type: GET_ALL_ACTIVITIES_SUCCESS,
  payload: { activities },
})

export const GET_ALL_ACTIVITIES_FAIL = 'GET_ALL_ACTIVITIES_FAIL'
export const getAllActivitiesFail = err => ({
  type: GET_ALL_ACTIVITIES_FAIL,
  payload: { err },
})


export const GET_PERSONAL_ACTIVITIES_REQUEST = 'GET_PERSONAL_ACTIVITIES_REQUEST'
export const getPersonalActivitiesRequest = ({ take, skip, sortAsc }) => ({
  type: GET_PERSONAL_ACTIVITIES_REQUEST,
  payload: { skip, take, sortAsc },
})

export const GET_PERSONAL_ACTIVITIES_SUCCESS = 'GET_PERSONAL_ACTIVITIES_SUCCESS'
export const getPersonalActivitiesSuccess = activities => ({
  type: GET_PERSONAL_ACTIVITIES_SUCCESS,
  payload: { activities },
})

export const GET_PERSONAL_ACTIVITIES_FAIL = 'GET_PERSONAL_ACTIVITIES_FAIL'
export const getPersonalActivitiesFail = err => ({
  type: GET_PERSONAL_ACTIVITIES_FAIL,
  payload: { err },
})
