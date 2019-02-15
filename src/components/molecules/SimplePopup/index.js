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
  
  background-color: ${palette('grey', 0)};
  min-width: 80%;
  min-height: 50px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  border-radius: 6px;
  
  animation: ${badgeAppear} 0.3s ease forwards 1;
`


const PopupBody = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  
  width: 100%;
  padding: 20px;
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


const SimplePopup = ({ onClose, children }) => {
  const onOverlayClick = ev => (ev.currentTarget === ev.target) && onClose()

  return (
    <Overlay onClick={onOverlayClick}>
      <Popup>
        <PopupBody>
          {children}
        </PopupBody>
        <Close onClick={onOverlayClick}>&times;</Close>
      </Popup>
    </Overlay>
  )
}

SimplePopup.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

export default SimplePopup
