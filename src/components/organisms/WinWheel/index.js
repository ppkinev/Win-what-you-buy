import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from '../../themes/default'
import { absoluteMiddleCSS } from '../../themes/style-snippets'
import { ctaCircularGradient, lightGreyCircularGradient } from '../../themes/gradients'
import { imagesPath, audioPath } from '../../../config'
import { pinRotationOnSpin } from '../../themes/keyframes'
import { randomIntFromInterval } from '../../../services/helpers'

import Winwheel from './winwheel'

const getWinWheel = ({ winWheelItems }) => {
  const SEGMENT_NUMBER = winWheelItems.length

  const segments = winWheelItems.map((item, ind) => {
    const isMainPrize = ind === 0
    const prizeFontSize = 18

    return isMainPrize ? {
      fillStyle: theme.palette.gold[0],
      text: 'MAIN\nPRIZE',
      image: item.image,
      id: item.id,
      textOrientation: 'curved',
      textAligment: 'inner',
      textMargin: SEGMENT_NUMBER * (prizeFontSize - 8),
      textFontFamily: 'monospace',
      textFontSize: 18,
      textFontWeight: 800,
      textFillStyle: theme.palette.grey[0],
    } : {
      text: item.text,
      image: item.image,
      id: item.id,
    }
  })

  return new Winwheel({
    canvasId: 'wheel-canvas',
    drawMode: 'segmentImage',
    imageOverlay: true,
    drawText: true,
    numSegments: SEGMENT_NUMBER,
    rotationAngle: -((360 / SEGMENT_NUMBER) / 2),
    lineWidth: 5,
    strokeStyle: theme.palette.main[0],
    textAlignment: 'inner',
    textMargin: 30,
    textFillStyle: theme.palette.main[0],
    textFontSize: 14,
    textFontWeight: 400,
    textFontFamily: theme.fonts.main,
    imagesFromOuter: true,
    resizeSegmentImages: true,
    segments,
    animation: {
      type: 'spinToStop',
      duration: 12,
      spins: 5,
      soundTrigger: 'segment', // segment

      // happens during animation
      // callbackAfter: () => console.log('callback after')
    },

    pointerAngle: 0,
    pointerGuide: {
      display: false,
      strokeStyle: 'red',
      lineWidth: 5,
    },
  })
}

const PADDING = 26

const WheelCanvas = styled.canvas.attrs({
  id: 'wheel-canvas',
})`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 5;
`

const getWheelHolderCSS = (size) => {
  if (size) {
    return css`
      width: ${size}px;
      height: ${size}px;
    `
  }
  return css `
    width: 490px;
    height: 490px;
  `
}
const WheelHolder = styled.div`
  ${props => getWheelHolderCSS(props.size)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${PADDING}px;
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
  
  ${ctaCircularGradient};
`
WheelHolder.propTypes = {
  size: PropTypes.number,
}

const WheelBackground = styled.div`
  ${absoluteMiddleCSS};
  width: calc(100% - ${(PADDING * 2) + 12}px);
  height: calc(100% - ${(PADDING * 2) + 12}px);
  border-radius: 50%;
  z-index: 1;
  
  ${lightGreyCircularGradient};
`

const WheelPin = styled.div`
  width: 70px;
  height: 100px;
  background: url('${imagesPath}/wheel_pin.png') no-repeat;
  background-position: center top;
  background-size: contain;
  
  position: absolute;
  top: -8%;
  left: 50%;
  margin-left: -35px;
  transform-origin: 35px 40px;
  
  z-index: 10;
  
  ${props => props.spinIt && pinRotationOnSpin};
`

WheelPin.propTypes = {
  spinIt: PropTypes.bool,
}

class WinWheel extends Component {
  constructor(props) {
    super(props)

    this.tweenMaxScript = document.createElement('script')
    this.tweenMaxScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js'

    this.tickAudio = new Audio(`${audioPath}/tick.mp3`)
    this.winAudio = new Audio(`${audioPath}/applause.mp3`)

    this.playSpinSound = this.playSpinSound.bind(this)
    this.onWinCallback = this.onWinCallback.bind(this)
  }

  componentDidMount() {
    this.props.onRef(this)
    document.head.appendChild(this.tweenMaxScript)
    this.updateWinWheel()
  }

  componentWillReceiveProps(nextProps) {
    const { winWheelItems: w1 } = this.props
    const w2 = nextProps.winWheelItems

    if (w1.length && w2.length) {
      if (w1[0].id !== w2[0].id) {
        this.updateWinWheel(w2)
      }
    }
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
    document.head.removeChild(this.tweenMaxScript)
  }

  onWheelSpin(segmentToWin) {
    const { winWheelItems } = this.props
    const segmentWidth = 360 / winWheelItems.length
    const winningSegmentMiddle = (segmentWidth * segmentToWin) - (segmentWidth / 2)

    this.wheel.animation.stopAngle = randomIntFromInterval(winningSegmentMiddle - (segmentWidth * 0.3), winningSegmentMiddle + (segmentWidth * 0.3))
    this.wheel.startAnimation()
  }

  onWinCallback(indicatedSegment) {
    // const winningSegmentNumber = this.wheel.getIndicatedSegmentNumber()

    // this.wheel.segments.forEach((segment, ind) => {
    //   if (ind === winningSegmentNumber) {
    //     segment.strokeStyle = theme.palette.gold[0]
    //   } else {
    //     segment.fillStyle = 'gray'
    //   }
    // })

    // this.wheel.draw()
    this.winAudio.pause()
    this.winAudio.currentTime = 0
    this.winAudio.play()

    this.props.onWheelSpinComplete(indicatedSegment)
  }

  playSpinSound() {
    this.tickAudio.pause()
    this.tickAudio.currentTime = 0
    this.tickAudio.play()
  }

  updateWinWheel(winItems) {
    const { winWheelItems } = this.props
    this.wheel = getWinWheel({ winWheelItems: winItems || winWheelItems })
    this.wheel.animation.callbackSound = this.playSpinSound
    this.wheel.animation.callbackFinished = this.onWinCallback
    this.wheel.draw()
  }

  render() {
    const { className, size } = this.props
    return (
      <WheelHolder className={className} size={size}>
        <WheelBackground />
        <WheelCanvas />
        <WheelPin />
      </WheelHolder>
    )
  }
}

WinWheel.propTypes = {
  winWheelItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
  onRef: PropTypes.func.isRequired,
  onWheelSpinComplete: PropTypes.func.isRequired,
  className: PropTypes.string,
  size: PropTypes.number,
}

export default WinWheel
