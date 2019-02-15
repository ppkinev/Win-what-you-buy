import {
  GET_DRAWS_REQUEST,
  GET_DRAWS_SUCCESS,
  GET_DRAWS_FAIL,
} from './actions'
import { initialState } from './selectors'

const userNormalizer = user => ({
  id: user.UserId,
  name: user.UserName,
  image: user.ImageUrl,
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DRAWS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_DRAWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        draws: payload.draws.map(draw => ({
          id: draw.DrawId,
          startDate: draw.StartDate,
          endDate: draw.EndDate,
          isDrawn: draw.IsDrawn,
          minLevel: draw.MinimalUserLevel,

          title: draw.Prize.Title,
          description: draw.Prize.Description,
          image: draw.Prize.ImageUrl,

          winner: draw.Winner ? userNormalizer(draw.Winner) : null,

          playersCount: draw.TotalPlayersCount,
          recentPlayers: draw.RecentPlayers.map(user => userNormalizer(user)),
        })),
      }
    case GET_DRAWS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.err,
      }
    default:
      return { ...state }
  }
}
