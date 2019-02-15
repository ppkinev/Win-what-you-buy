export const initialState = {
  offerPopup: null,
  videoOffer: null,
  isSideMenuOpened: false,
}
export const getOfferPopup = (state = initialState) => state.offerPopup
export const getVideoOffer = (state = initialState) => state.videoOffer
export const isSideMenuOpened = (state = initialState) => state.isSideMenuOpened
