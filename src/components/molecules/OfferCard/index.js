import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, font, size } from 'styled-theme'
import ButtonMain from '../../atoms/ButtonMain'
import UsersDone from '../../atoms/UsersDone'
import { lightGreyGradient } from '../../themes/gradients'
import { rightCardSlideIn, leftCardSlideIn } from '../../themes/keyframes'


const shapeCSS = css`
  position: absolute;
  width: 180px;
  height: 230px;
  border-radius: 16px;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  box-sizing: border-box;
`

const rightSideShiftCSS = css`
    left: 5px;
    transform: rotateZ(4deg);
`

const leftSideShiftCSS = css`
    left: -5px;
    transform: rotateZ(-4deg);
`

const BackCard = styled.div`
  ${shapeCSS};
   background-color: ${palette('main', 1)};
   z-index: 1;
   top: 1px;
   ${props => props.rightShifted ? rightSideShiftCSS : leftSideShiftCSS};
`

BackCard.propTypes = {
  rightShifted: PropTypes.bool,
}

const rightFrontCardCSS = css`
  animation: ${rightCardSlideIn} 0.5s ease 0.5s forwards 1;
  transform: translate(170%, -50%) rotate(480deg);
`

const leftFrontCardCSS = css`
  animation: ${leftCardSlideIn} 0.5s ease 0.3s forwards 1;
  transform: translate(-170%, -50%) rotate(-480deg);
`

const FrontCard = styled.div`
  ${shapeCSS};
  ${lightGreyGradient};
  z-index: 5;
  padding: 15px 15px 10px;
  text-align: center;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  border: 4px solid ${palette('main', 0)};
  
  opacity: 0;
  
  ${props => props.rightShifted ? rightFrontCardCSS : leftFrontCardCSS};
`
FrontCard.propTypes = {
  rightShifted: PropTypes.bool,
}

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  outline: none;
`

const Title = styled.h3`
  font-family: ${font('main')};
  color: ${palette('main', 1)};
  font-size: ${size('textRegular')};
  text-shadow: 1px 1px 2px rgba(0,0,0,0.15);
  margin: 5px 0;
`

const Holder = styled.div`
  width: 180px;
  height: 230px;
  position: relative;
`

const OfferCard = ({ className, rightShifted, id, image, title, description, odds, usersDone, usersDoneTotal, onButtonClick }) => {
  const onClick = () => onButtonClick({ id, image, title, description })
  return (
    <Holder className={className}>
      <BackCard rightShifted={rightShifted} />
      <FrontCard rightShifted={rightShifted}>
        <Image src={image} />
        <Title>{title}</Title>
        <ButtonMain onClick={onClick}>Increase {odds}</ButtonMain>
        <UsersDone column users={usersDone} totalAmount={usersDoneTotal} />
      </FrontCard>
    </Holder>
  )
}

OfferCard.propTypes = {
  rightShifted: PropTypes.bool,
  className: PropTypes.string,

  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  odds: PropTypes.string.isRequired,

  usersDone: PropTypes.array,
  usersDoneTotal: PropTypes.number,

  onButtonClick: PropTypes.func.isRequired,
}

export default OfferCard
