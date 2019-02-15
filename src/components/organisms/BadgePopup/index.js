import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import { absoluteMiddleCSS } from '../../themes/style-snippets'
import { fadeIn, badgeAppear } from '../../themes/keyframes'

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  
  animation: ${fadeIn} 0.3s ease forwards 1;
`

const Popup = styled.div`
  ${absoluteMiddleCSS};
  
  background-color: ${palette('grey', 0)};
  padding: 30px 15px;
  border-radius: 14px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 80%;
  
  animation: ${badgeAppear} 0.3s ease forwards 1;
`

const Image = styled.img`
  display: inline-block;
  max-width: 50%;
  height: auto;
`

const Title = styled.h2`
  margin: 30px 0 20px;
  padding: 0;
  font-size: ${size('prizeTitle')};
  color: ${palette('main', 0)};
`

const Description = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${size('textRegular')};
  color: ${palette('text', 0)};
  text-align: center;
`

const BadgePopup = ({ image, title, description, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Popup>
        <Image src={image} />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Popup>
    </Overlay>
  )
}

BadgePopup.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

export default BadgePopup
