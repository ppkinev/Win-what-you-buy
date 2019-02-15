export const initialState = { isUserAuthorized: false }

export const isUserAuthorized = (state = initialState) => state.isUserAuthorized
export const getProfileInfo = (state = initialState) => ({
  name: state.name,
  id: state.id,
  image: state.image,
  points: state.points,
  credits: state.credits,
})
