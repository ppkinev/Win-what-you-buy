import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, font, size } from 'styled-theme'
import ButtonMain from '../../atoms/ButtonMain'

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
  min-width: 300px;
  min-height: 200px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  border-radius: 6px;
  
  animation: ${badgeAppear} 0.3s ease forwards 1;
`

const Header = styled.div`
  height: 40px;
  line-height: 40px;
  background-color: ${palette('main', 0)};
  color: ${palette('grey', 0)};
  font-size: 14px;
  padding: 0 30px;
  box-sizing: border-box;
  width: 100%;
  
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

const PopupBody = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  width: 100%;
  padding: 30px;
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

const Title = styled.div`
  font-size: 20px;
  color: ${palette('text', 0)};
`

const ImageHolder = styled.div`
  width: 90px;
  height: 90px;
  overflow: hidden;
  position: relative;
  margin-right: 30px;
`

const Image = styled.img`
  ${absoluteMiddleCSS};
  max-width: 100%;
  height: auto;
`

const Description = styled.p`
  font-size: 14px;
  color: ${palette('text', 0)};
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0 0 25px;
`

const Separator = styled.div`
  width: 100%;
  height: 1px;
  
  background-color: ${palette('grey', 3)};
  margin: 10px 0 20px;
`

const Details = styled.div`
  font-size: 12px;
  color: ${palette('grey', 4)};
  width: 100%;
  position: relative;
  margin-top: 30px;
  
  &:after {
    content: 'Additional info';
    background-color: ${palette('grey', 0)};
    
    position: absolute;
    top: 3px;
    left: 50%;
    padding: 0 10px;
    transform: translateX(-50%);
  }
`


const OfferPopup = ({ title, image, description, url, details, onClose, onActionClick }) => {
  const onOverlayClick = ev => (ev.currentTarget === ev.target) && onClose()

  return (
    <Overlay onClick={onOverlayClick}>
      <Popup>
        <Header>You are leaving the site</Header>
        <PopupBody>
          <Top>
            <ImageHolder>
              <Image src={image} />
            </ImageHolder>
            <Title>{title}</Title>
          </Top>
          <Description>{description}</Description>
          <ButtonMain onClick={onActionClick}>Do an action</ButtonMain>
          {!!details && (
            <Details>
              <Separator />
              {details}
            </Details>
          )}
        </PopupBody>
      </Popup>
    </Overlay>
  )
}

OfferPopup.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  // other attributes might be here depending on offer type
  url: PropTypes.string.isRequired,
  details: PropTypes.string,

  onClose: PropTypes.func.isRequired,
  onActionClick: PropTypes.func,
}

export default OfferPopup
