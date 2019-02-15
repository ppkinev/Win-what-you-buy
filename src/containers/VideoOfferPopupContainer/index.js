import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromGeneral } from 'store/selectors'

import { VideoOfferPopup } from 'components'
import { videoOfferClose } from 'store/actions'

import { getURLParameter } from '../../services/helpers'

let playbackInterval
const youtubeShortRXP = /youtu\.be\/([^?]+)/

class VideoOfferPopupContainer extends Component {
  constructor(props) {
    super(props)

    this.onPlayerReady = this.onPlayerReady.bind(this)
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
    this.onPlayerError = this.onPlayerError.bind(this)

    this.state = {
      shownInterval: 0,
      player: null,

      startTime: null,
      lastPauseTime: null,
      pausesDuration: 0,
    }
  }

  componentDidMount() {
    const { videoOffer: { url } } = this.props
    this.startingPlayer(url)
  }

  componentWillUnmount() {
    if (this.playbackInterval) window.clearInterval(this.playbackInterval)
  }

  onPlayerError(e) {
    window.console.log(e)
    // this.closePopup();
  }

  onPlayerReady(e) {
    // const { popup, trackActions } = this.props
    // // e.target.playVideo();
    // trackActions.postTrackOffer(popup.earnId)
  }

  onPlayerStateChange(e) {
    const { videoOffer } = this.props
    const { player } = this.state
    const { startTime, lastPauseTime, pausesDuration } = this.state

    const watchedDuration = Date.now() - startTime - pausesDuration

    if (e.data === 0) {
      // Video has finished

      if (player.getDuration) {
        if (player.getDuration() * 1000 > watchedDuration + 2000) {
          // Video was forwarded
          window.console.warn('You need to watch the full video to get points')
        } else {
          // Video normally watched and completed
          // trackActions.postCompleteOffer(popup.earnId)
          window.console.info('Completing an offer here')
        }
      } else {
        // trackActions.postCompleteOffer(popup.earnId)
        window.console.info('Completing an offer here')
      }

      this.closePopup()
    } else if (e.data === 1) {
      // Video is playing

      if (!startTime) this.setState({ startTime: Date.now() })

      if (lastPauseTime) {
        this.setState({
          pausesDuration: pausesDuration + (Date.now() - lastPauseTime),
        })
      }

      // this.setState({
      //     betweenPauses: (new Date()).getTime()
      // });
      this.videoInterval()
    } else if (e.data === 2) {
      // Video is paused
      this.setState({ lastPauseTime: Date.now() })


      // fullDuration += ((new Date()).getTime() - betweenPauses);
      // this.setState({fullDuration});
      if (this.playbackInterval) clearInterval(this.playbackInterval)
    }
  }

  startingPlayer(videoUrl) {
    let videoID = getURLParameter('v', videoUrl)
    if (!videoID) {
      videoID = videoUrl.match(youtubeShortRXP)
      if (videoID.length) videoID = videoID[1]
    }
    this.setState({
      player: new YT.Player('video-offer', {
        height: '300',
        width: '100%',
        videoId: videoID,
        playerVars: {
          controls: 0,
          rel: 0,
          enablejsapi: 1,
          origin: window.document.origin,
          fs: 0,
          modestbranding: 1, // player that does not show a YouTube logo
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
          onError: this.onPlayerError,
        },
      }),
    })

    window.setTimeout(() => {
      window.player = this.state.player
    }, 300)
  }

  closePopup() {
    const { player } = this.state
    player.destroy()
    this.setState({
      shownInterval: 0,
      player: null,
    })
    this.props.videoOfferClose()
    if (this.playbackInterval) window.clearInterval(this.playbackInterval)
  }

  videoInterval() {
    const { player } = this.state
    if (player.getDuration && player.getCurrentTime) {
      this.playbackInterval = setInterval(() => {
        this.setState({
          shownInterval: Math.floor(player.getDuration() - player.getCurrentTime()),
        })
      }, 1000)
    }
  }

  render() {
    return (
      <VideoOfferPopup
        onClose={this.props.videoOfferClose}
      />
    )
  }
}


VideoOfferPopupContainer.propTypes = {
  videoOfferClose: PropTypes.func,
  videoOffer: PropTypes.object,
}

const mapStateToProps = state => ({
  videoOffer: fromGeneral.getVideoOffer(state),
})
const mapDispatchToProps = dispatch => ({

  videoOfferClose: () => dispatch(videoOfferClose()),
})


export default connect(mapStateToProps, mapDispatchToProps)(VideoOfferPopupContainer)
