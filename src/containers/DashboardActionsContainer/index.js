import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fromOffers } from 'store/selectors'

import { ActionPanel } from 'components'

import { offerPopupOpen, getOffersRequest, videoOfferOpen } from 'store/actions'

class DashboardActionsContainer extends Component {
  constructor(props) {
    super(props)

    this.onShowAllActions = this.onShowAllActions.bind(this)
    this.onActionApply = this.onActionApply.bind(this)
  }

  componentDidMount() {
    this.props.getOffers()
  }

  onActionApply(action) {
    this.props.videoOfferOpen(action)
  }

  onShowAllActions() {
    this.props.history.push('earn')
  }

  render() {
    const {
      videoOffer: {
        title, description, image, typeImage, reward, rewardType, playersCount, recentPlayers, customData: { url } = {},
      } = {},
      isLoading,
    } = this.props

    return !isLoading ? (
      <ActionPanel
        title={title}
        description={description}
        image={image || typeImage}
        details={'The container component does the job of managing of state. The container, in this case, is the higher-order component.\nIn the search example we talked about earlier, the search component would be the container component that manages the search state and wraps the presentation components that need the search functionality. The presentation components otherwise have no idea of state or how it is being managed.'}
        url={url}
        reward={reward}
        currency={rewardType}
        usersDone={recentPlayers}
        usersDoneTotal={playersCount}

        onApply={this.onActionApply}
        onShowAll={this.onShowAllActions}
      />
    ) : null
  }
}

DashboardActionsContainer.propTypes = {
  history: PropTypes.object,

  offerPopupOpen: PropTypes.func,
  videoOfferOpen: PropTypes.func,
  offers: PropTypes.array,
  getOffers: PropTypes.func,
  videoOffer: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    typeImage: PropTypes.string,
    reward: PropTypes.number,
    rewardType: PropTypes.string,
    playersCount: PropTypes.number,
    recentPlayers: PropTypes.object,
    customData: PropTypes.object,
  })),

  isLoading: PropTypes.bool,
}

const mapStateToProps = state => ({
  offers: fromOffers.getOffers(state),
  isLoading: fromOffers.isOffersLoading(state),
  videoOffer: fromOffers.getVideoOffer(state),
})
const mapDispatchToProps = dispatch => ({
  offerPopupOpen: offer => dispatch(offerPopupOpen(offer)),
  videoOfferOpen: offer => dispatch(videoOfferOpen(offer)),
  getOffers: () => dispatch(getOffersRequest()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardActionsContainer))
