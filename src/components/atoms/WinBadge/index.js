import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, font, size } from 'styled-theme'
import { imagesPath } from '../../../config'
import { absoluteMiddleCSS } from '../../themes/style-snippets'
import { fadeIn } from '../../themes/keyframes'

const Base = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  
  background: url('${imagesPath}/win-badge/win-badge-base.png') no-repeat;
  background-position: center;
  background-size: 100%;
  
  ${size('mobileMediaQuery')} {
    width: 340px;
    height: 340px;  
  }
`

const Ribbon = styled.div`
  width: 100%;
  height: 100%;
  background: url('${imagesPath}/win-badge/win-badge-ribbon.png') no-repeat;
  background-position: center;
  background-size: 100%;
  ${absoluteMiddleCSS};
`

const PrizeImage = styled.img.attrs({
  src: props => props.prizeImage,
})`
  width: 100%;
  height: 100%;
`
PrizeImage.propTypes = {
  prizeImage: PropTypes.string,
}

const PrizeImageHolder = styled.div`
  ${absoluteMiddleCSS};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  width: 55%;
  height: 55%;
`

const Title = styled.h3`
  margin: 0;
  font-family: ${font('main')};
  font-size: ${size('prizeTitle')};
  color: ${palette('grey', 0)};
  text-transform: uppercase;
  text-shadow: 0 0 3px rgba(0,0,0,0.3);
  width: 75%;
  text-align: center;
  
  ${size('mobileMediaQuery')} {
    font-size: 18px;    
  }
  
  ${absoluteMiddleCSS};
`

const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 40px;
  font-size: 70px;
  font-weight: 100;
  opacity: 0;
  cursor: pointer;
  color: ${palette('grey', 0)};
  text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
  
  animation: ${fadeIn} 0.3s ease 0.7s forwards 1;
`

const WinBadge = ({ className, image, title = 'Congratulations!', onClose }) => {
  return (
    <Base className={className}>
      <PrizeImageHolder>
        <PrizeImage prizeImage={image} />
      </PrizeImageHolder>
      <Ribbon />
      <Title>{title}</Title>
      <Close onClick={onClose}>&times;</Close>
    </Base>
  )
}

WinBadge.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}


export default WinBadge
