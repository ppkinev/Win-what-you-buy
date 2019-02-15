export const OFFER_POPUP_OPEN = 'OFFER_POPUP_OPEN'
export const offerPopupOpen = ({ title, image, description, url, details }) => ({
  type: OFFER_POPUP_OPEN,
  payload: {
    title, image, description, url, details,
  },
})

export const OFFER_POPUP_CLOSE = 'OFFER_POPUP_CLOSE'
export const offerPopupClose = () => ({
  type: OFFER_POPUP_CLOSE,
})


export const VIDEO_OFFER_OPEN = 'VIDEO_OFFER_OPEN'
export const videoOfferOpen = ({ url }) => ({
  type: VIDEO_OFFER_OPEN,
  payload: {
    url
  },
})

export const VIDEO_OFFER_CLOSE = 'VIDEO_OFFER_CLOSE'
export const videoOfferClose = () => ({
  type: VIDEO_OFFER_CLOSE,
})


export const SIDE_MENU_OPEN = 'SIDE_MENU_OPEN'
export const sideMenuOpen = () => ({
  type: SIDE_MENU_OPEN,
})

export const SIDE_MENU_CLOSE = 'SIDE_MENU_CLOSE'
export const sideMenuClose = () => ({
  type: SIDE_MENU_CLOSE,
})
