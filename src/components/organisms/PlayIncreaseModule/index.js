import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, font, size } from 'styled-theme'
import ProgressBar from './ProgressBar'
import PlayBtn from './PlayBtn'
import { ctaGradient } from '../../themes/gradients'

const MainHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const PlaySectionBase = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: ${palette('grey', 1)};
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`

const BetAmount = styled.p`
  font-family: ${font('main')};
  font-size: ${size('textTitle')};
  color: ${palette('main', 0)};
  margin: 0;
  
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 8px;
`

const SignBtn = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  color: ${palette('grey', 0)};
  line-height: 40px;
  font-size: ${size('menuItems')};
  text-align: center;
  ${ctaGradient};
  transition: opacity 0.25s ease;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    opacity: 1;
    background: ${palette('main', 1)};
  }
`


const PlayIncreaseModule = ({
                              currency = 'pts',
                              betAmount,
                              progressPercent,
                              onPlayBtnClick,
                              onMinusButtonClick,
                              onPlusButtonClick,
                            }) => {
  const betAmountText = currency === 'pts' ? `${betAmount} ${currency}` : `${currency}${betAmount}`

  return (
    <MainHolder>
      <SignBtn onClick={onMinusButtonClick}>-</SignBtn>
      <PlaySectionBase>
        <ProgressBar percent={progressPercent} />
        <PlayBtn onClick={onPlayBtnClick} />
        <BetAmount>{betAmountText}</BetAmount>
      </PlaySectionBase>
      <SignBtn onClick={onPlusButtonClick}>+</SignBtn>
    </MainHolder>
  )
}

PlayIncreaseModule.propTypes = {
  currency: PropTypes.string,
  betAmount: PropTypes.number.isRequired,
  progressPercent: PropTypes.number.isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
  onMinusButtonClick: PropTypes.func.isRequired,
  onPlusButtonClick: PropTypes.func.isRequired,
}


export default PlayIncreaseModule
