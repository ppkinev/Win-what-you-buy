export const initialState = { isLoading: false, draws: [], error: null }

export const getDraws = (state = initialState) => state.draws
export const isDrawsLoading = (state = initialState) => state.isLoading
