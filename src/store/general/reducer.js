import {
  initialState,
} from './selectors'
import {
  OFFER_POPUP_OPEN,
  OFFER_POPUP_CLOSE,
  VIDEO_OFFER_OPEN,
  VIDEO_OFFER_CLOSE,
  SIDE_MENU_OPEN,
  SIDE_MENU_CLOSE,
} from './actions'

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case OFFER_POPUP_OPEN:
      return {
        ...state,
        offerPopup: {
          title: payload.title,
          image: payload.image,
          description: payload.description,
          url: payload.url,
          details: payload.details,
        },
      }
    case OFFER_POPUP_CLOSE:
      return {
        ...state,
        offerPopup: null,
      }
    case VIDEO_OFFER_OPEN:
      return {
        ...state,
        videoOffer: {
          url: payload.url,
        },
      }
    case VIDEO_OFFER_CLOSE:
      return {
        ...state,
        videoOffer: null,
      }
    case SIDE_MENU_OPEN:
      return {
        ...state,
        isSideMenuOpened: true,
      }
    case SIDE_MENU_CLOSE:
      return {
        ...state,
        isSideMenuOpened: false,
      }
    default:
      return { ...state }
  }
}
