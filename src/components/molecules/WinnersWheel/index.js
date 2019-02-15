import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette, size } from 'styled-theme'

import CircularProgressbar from 'react-circular-progressbar'
import Dot from '../../atoms/Dot'
import theme from '../../themes/default'

import { absoluteMiddleCSS } from '../../themes/style-snippets'


const Holder = styled.div`
  position: relative;
  
  width: 200px;
  height: 200px;
`

const AbsolutePositionedProgressBar = styled(CircularProgressbar)`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(90deg);
`
const MAX = 90
const getPercent = (percent = 100) => MAX * (percent / 100)

const BackgroundBar = () => (
  <AbsolutePositionedProgressBar
    percentage={getPercent()}
    strokeWidth={8}
    styles={{
      path: { stroke: theme.palette.grey[3], strokeLinecap: 'round', transformOrigin: 'center center' },
      trail: { stroke: 'transparent' },
      zIndex: 1,
    }}
    counterClockwise
  />
)

const SecondaryBar = ({ percent }) => (
  <AbsolutePositionedProgressBar
    percentage={getPercent(percent)}
    strokeWidth={8}
    styles={{
      path: { stroke: theme.palette.gold[0], strokeLinecap: 'round', transformOrigin: 'center center' },
      trail: { stroke: 'transparent' },
      zIndex: 3,
    }}
    counterClockwise
  />
)
SecondaryBar.propTypes = {
  percent: PropTypes.number.isRequired,
}

const PrimaryBar = ({ percent }) => (
  <AbsolutePositionedProgressBar
    percentage={getPercent(percent)}
    strokeWidth={8}
    styles={{
      path: { stroke: theme.palette.main[0], strokeLinecap: 'round', transformOrigin: 'center center' },
      trail: { stroke: 'transparent' },
      zIndex: 5,
    }}
    counterClockwise
  />
)
PrimaryBar.propTypes = {
  percent: PropTypes.number.isRequired,
}

const Title = styled.h3`
  margin: 0 0 14px;
  padding: 0;
  color: ${palette('main', 0)};
  font-size: ${size('textRegular')};
  font-family: ${font('main')};
  font-weight: 400;
`

const Amount = styled.h3`
  margin: 0 0 8px;
  padding: 0;
  color: ${palette('main', 0)};
  font-size: 40px;
  font-family: ${font('main')};
`

const DotsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 100px;
`

const ContentHolder = styled.div`
  ${absoluteMiddleCSS};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WinnersWheel = ({ className, title, amount = 0, primaryPercent = 0, secondaryPercent = 0 }) => {
  return (
    <Holder className={className}>
      <BackgroundBar />
      <SecondaryBar percent={secondaryPercent} />
      <PrimaryBar percent={primaryPercent} />

      <ContentHolder>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
        <DotsHolder>
          <Dot color={'all'} />
          <Dot color={'personal'} />
          <Dot color={'friends'} />
          <Dot />
        </DotsHolder>
      </ContentHolder>
    </Holder>
  )
}

WinnersWheel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  primaryPercent: PropTypes.number.isRequired,
  secondaryPercent: PropTypes.number.isRequired,
}

export default WinnersWheel
