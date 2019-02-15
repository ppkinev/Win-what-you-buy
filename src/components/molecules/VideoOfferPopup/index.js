import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { absoluteMiddleCSS } from '../../themes/style-snippets'
import { fadeIn, badgeAppear } from '../../themes/keyframes'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 20000;
  
  animation: ${fadeIn} 0.3s ease forwards 1;
`

const Popup = styled.div`
  ${absoluteMiddleCSS};
  
  background-color: #000;
  min-width: 300px;
  min-height: 200px;
  
  width: 70%;
  height: 50%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  border-radius: 6px;
  
  animation: ${badgeAppear} 0.3s ease forwards 1;
`

const PopupBody = styled.div`
  width: 100%;
  height: 100%;
`

const Close = styled.div`
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: 400;
  color: ${palette('grey', 0)};
  position: absolute;
  top: -40px;
  right: -30px;
  cursor: pointer;
`

const VideoOfferPopup = ({ onClose }) => {
  return (
    <Overlay>
      <Popup>
        <PopupBody id={'video-offer'} />
        <Close onClick={onClose}>&times;</Close>
      </Popup>
    </Overlay>
  )
}

VideoOfferPopup.propTypes = {
  children: PropTypes.node,
}

export default VideoOfferPopup
