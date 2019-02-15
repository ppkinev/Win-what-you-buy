import {
  GET_OFFERS_REQUEST, GET_OFFERS_SUCCESS, GET_OFFERS_FAIL,
  GET_USER_OFFERS_REQUEST, GET_USER_OFFERS_SUCCESS, GET_USER_OFFERS_FAIL,
  TRACK_OFFER_REQUEST, TRACK_OFFER_SUCCESS, TRACK_OFFER_FAIL,
  CANCEL_OFFER_REQUEST, CANCEL_OFFER_SUCCESS, CANCEL_OFFER_FAIL,
  COMPLETE_OFFER_REQUEST, COMPLETE_OFFER_SUCCESS, COMPLETE_OFFER_FAIL,
} from './actions'
import { initialState } from './selectors'

const userNormalizer = user => ({
  id: user.UserId,
  name: user.UserName,
  image: user.ImageUrl,
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_OFFERS_REQUEST:
    case GET_USER_OFFERS_REQUEST:
    case TRACK_OFFER_REQUEST:
    case CANCEL_OFFER_REQUEST:
    case COMPLETE_OFFER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_OFFERS_SUCCESS:
    case GET_USER_OFFERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        offers: payload.offers.map(o => ({
          id: o.Offer.Id,
          title: o.Offer.Title,
          description: o.Offer.Description,
          image: o.Offer.ImageUrl,
          reward: o.Offer.RewardAmount,
          rewardType: o.Offer.RewardType.toLowerCase(),
          customData: o.Offer.CustomData && {
            ...o.Offer.CustomData,
            url: o.Offer.CustomData.Url,
          },
          type: o.Offer.Type.Name.toLowerCase(),
          typeId: o.Offer.Type.OfferTypeId,
          typeImage: o.Offer.Type.ImageUrl,
          group: o.Offer.Type.Group.Name.toLowerCase(),
          groupId: o.Offer.Type.Group.OfferGroupId,
          groupImage: o.Offer.Type.Group.ImageUrl,
          sponsor: o.Offer.Sponsor.Name,
          sponsorId: o.Offer.Sponsor.Id,
          sortBySponsor: o.Offer.Sponsor.SortOrder,
          isFeatured: o.Offer.IsFeatured,
          playersCount: o.TotalCompletersCount,
          recentPlayers: o.RecentCompleters.map(user => userNormalizer(user)),
        })),
      }
    case TRACK_OFFER_SUCCESS:
    case CANCEL_OFFER_SUCCESS:
    case COMPLETE_OFFER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case GET_OFFERS_FAIL:
    case GET_USER_OFFERS_FAIL:
    case TRACK_OFFER_FAIL:
    case CANCEL_OFFER_FAIL:
    case COMPLETE_OFFER_FAIL:
      return {
        ...state,
        error: payload.err,
      }
    default:
      return { ...state }
  }
}
