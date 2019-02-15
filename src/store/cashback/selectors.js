export const initialState = { categories: [], retailers: [], error: null, isCategoriesLoading: false, isRetailersLoading: false }

export const getCashbackCategories = (state = initialState) => state.categories
export const getCashbackRetailers = (state = initialState) => state.retailers
