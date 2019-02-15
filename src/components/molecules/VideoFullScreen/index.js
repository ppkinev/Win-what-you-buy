import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Video = styled.video.attrs({
  autoPlay: true,
  controls: false,
  loop: true,
  muted: true,
  preload: 'auto',
  playsInline: true,
})`

`

const Source = styled.source.attrs({
  type: 'video/mp4',
})`
  
`

const VideoFullScreen = ({ className, src }) => {
  return (
    <Video className={className}>
      <Source src={src} />
    </Video>
  )
}

VideoFullScreen.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default VideoFullScreen
