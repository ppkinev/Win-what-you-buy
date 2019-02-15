import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { offerPopupClose, videoOfferClose } from 'store/actions'
import { fromGeneral } from 'store/selectors'

import { Footer, Wrapper } from 'components'
import HeaderContainer from '../../../containers/HeaderContainer'
import VideoOfferPopupContainer from '../../../containers/VideoOfferPopupContainer'

import OfferPopup from '../../molecules/OfferPopup'


const PageTemplate = ({
                        children,
                        offerPopup,
                        videoPopup,
                        offerPopupClose,
                        videoOfferClose,
                      }) => {
  return (
    <Wrapper>
      <HeaderContainer />
      {children}
      <Footer />

      {!!offerPopup && (
        <OfferPopup
          {...offerPopup}
          onClose={offerPopupClose}
        />
      )}

      {!!videoPopup && (
        <VideoOfferPopupContainer
          {...videoPopup}
          onClose={videoOfferClose}
        />
      )}

    </Wrapper>
  )
}


PageTemplate.propTypes = {
  children: PropTypes.node,

  offerPopup: PropTypes.object,
  videoPopup: PropTypes.object,
  offerPopupClose: PropTypes.func,
  videoOfferClose: PropTypes.func,
}

const mapStateToProps = state => ({
  offerPopup: fromGeneral.getOfferPopup(state),
  videoPopup: fromGeneral.getVideoOffer(state),
})
const mapDispatchToProps = dispatch => ({
  offerPopupClose: () => dispatch(offerPopupClose()),
  videoOfferClose: () => dispatch(videoOfferClose()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplate)
