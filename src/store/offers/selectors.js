export const initialState = { isLoading: false, offers: [], error: null }

export const getOffers = (state = initialState) => state.offers
export const isOffersLoading = (state = initialState) => state.isLoading

export const getVideoOffer = (state = initialState) => state.offers.filter(o => o.group === 'watch').sort((a, b) => b.playersCount - a.playersCount)[0]
