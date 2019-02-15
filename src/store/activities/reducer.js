import {
  GET_ALL_ACTIVITIES_REQUEST, GET_ALL_ACTIVITIES_SUCCESS, GET_ALL_ACTIVITIES_FAIL,
  GET_PERSONAL_ACTIVITIES_REQUEST, GET_PERSONAL_ACTIVITIES_SUCCESS, GET_PERSONAL_ACTIVITIES_FAIL,
} from './actions'
import { initialState } from './selectors'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ACTIVITIES_REQUEST:
    case GET_PERSONAL_ACTIVITIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_ALL_ACTIVITIES_SUCCESS:
    case GET_PERSONAL_ACTIVITIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        activities: payload.activities.map(act => ({
          ...act,
          id: act.Id,
          date: act.Date,
          outflow: act.Direction.toLowerCase() === 'outflow',
          type: act.ActivityType,
        })).sort((a, b) => new Date(b.date) - new Date(a.date)),
      }
    case GET_ALL_ACTIVITIES_FAIL:
    case GET_PERSONAL_ACTIVITIES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.err,
      }
    default:
      return { ...state }
  }
}
