import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { libsPath, imagesPath } from '../../../config'

import Wheel from './Wheel'
import getSpinWheelSettings from './wheel-settings'
import Spin2WinWheel from './Spin2WinWheel'

import { absoluteMiddleCSS } from '../../themes/style-snippets'
import { ctaCircularGradient, lightGreyCircularGradient } from '../../themes/gradients'

const requiredPlugins = [
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/utils/Draggable.min.js',
  `${libsPath}/ThrowPropsPlugin.min.js`,
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/TextPlugin.min.js',
]

const tweenMaxIsLoaded = (callback) => {
  // if (window.TweenMax && callback) callback()
  const interval = window.setInterval(() => {
    if (window.TweenMax) {
      window.clearInterval(interval)
      if (callback) {
        window.setTimeout(callback, 1000)
      }
    }
  }, 200)
}

// const wheelSettings = {
//   'colorArray': [
//     '#364C62',
//     '#F1C40F',
//     '#E67E22',
//     '#E74C3C',
//     '#ECF0F1',
//     '#95A5A6',
//     '#16A085',
//     '#27AE60',
//     '#2980B9',
//     '#8E44AD',
//     '#2C3E50',
//     '#F39C12',
//     '#D35400',
//     '#C0392B',
//     '#BDC3C7',
//     '#1ABC9C',
//     '#2ECC71',
//     '#E87AC2',
//     '#3498DB',
//     '#9B59B6',
//     '#7F8C8D',
//   ],
//
//   'segmentValuesArray': [
//     {
//       'probability': 50,
//       'type': 'image',
//       'value': 'https://picsum.photos/200?image=10',
//       text: 'Main Prize',
//       wheelTextOffsetY: 30,
//       'win': true,
//       'resultText': 'You won a holiday!',
//       'userData': {
//         'score': 1000000
//       },
//       mainPrize: true,
//     },
//     {
//       'probability': 0,
//       'type': 'image',
//       'value': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/tip_sqr.svg',
//       text: 'prize title',
//       wheelTextOffsetY: 30,
//       wheelImageSize: 120,
//       'win': false,
//       'resultText': 'NOBODY LIKES A SQUARE :&#40;',
//       'userData': { 'score': 0 },
//     },
//     {
//       'probability': 0,
//       'type': 'image',
//       'value': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/tip_oct.svg',
//       'win': false,
//       'resultText': 'LOSE WITH AN OCTAGON!',
//       'userData': { 'score': 0 },
//     },
//     {
//       'probability': 0,
//       'type': 'image',
//       'value': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/tip_triangle.svg',
//       'win': true,
//       'resultText': 'A TRIANGLE MEANS A PRIZE!',
//       'userData': { 'score': 40 },
//     },
//     {
//       'probability': 0,
//       'type': 'image',
//       'value': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/tip_circle.svg',
//       'win': false,
//       'resultText': 'A CIRCLE IS A WINNER!',
//       'userData': { 'score': 0 },
//     },
//     {
//       'probability': 0,
//       'type': 'image',
//       'value': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/tip_hex.svg',
//       'win': false,
//       'resultText': 'A HEXAGON IS A LOSE',
//       'userData': { 'score': 0 },
//     },
//     {
//       'probability': 50,
//       'type': 'string',
//       'value': 'LOSE ALL',
//       'win': false,
//       'resultText': 'YOU LOSE EVERYTHING!',
//       'userData': { 'score': 2 },
//     },
//   ],
//
//   'svgWidth': 720,
//   'svgHeight': 800,
//   'wheelStrokeColor': '#D0BD0C',
//   'wheelStrokeWidth': 18,
//   'wheelSize': 700,
//   'wheelTextOffsetY': 80,
//   'wheelTextColor': '#EDEDED',
//   'wheelTextSize': '1.6em',
//   'wheelImageOffsetY': 40,
//   'wheelImageSize': 100,
//   'centerCircleSize': 0,
//   'centerCircleStrokeColor': '#F1DC15',
//   'centerCircleStrokeWidth': 12,
//   'centerCircleFillColor': '#EDEDED',
//   'segmentStrokeColor': '#E2E2E2',
//   'segmentStrokeWidth': 4,
//   'centerX': 360,
//   'centerY': 400,
//   'hasShadows': false,
//   'numSpins': 4,
//   'spinDestinationArray': [],
//   'minSpinDuration': 6,
//   'gameOverText': 'I HOPE YOU ENJOYED SPIN2WIN WHEEL.<br>NOW GO AND <a href=\'https://codecanyon.net/item/spin2win-wheel-spin-it-2-win-it/16337656?ref=chrisgannon\'>BUY IT!</a> :)',
//   'invalidSpinText': 'INVALID SPIN. PLEASE SPIN AGAIN.',
//   'introText': 'YOU HAVE TO<br>SPIN IT <span style=\'color:#F282A9;\'>2</span> WIN IT!',
//   'hasSound': true,
//   'gameId': '9a0232ec06bc431114e2a7f3aea03bbe2164f1aa',
//   'clickToSpin': true,
//   'spinDirection': 'ccw',
//
//   spinSound: `${audioPath}/tick.mp3`,
// }

const WheelSVG = styled(Wheel)`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 5;
  margin-top: -64px;
`

const PADDING = 26
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
  padding: 0 ${PADDING}px;
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

class WinWheelSVG extends Component {
  constructor(props) {
    super(props)

    this.scripts = []
    requiredPlugins.forEach((src) => {
      const script = document.createElement('script')
      script.src = src
      this.scripts.push(script)
    })

    this.scripts.forEach(script => document.body.appendChild(script))

    this.onWinCallback = this.onWinCallback.bind(this)
  }

  componentDidMount() {
    this.props.onRef(this)
    tweenMaxIsLoaded(() => {
      this.onWinWheelUpdate()
    })
  }

  componentWillReceiveProps(nextProps) {
    const { winWheelItems: w1 } = this.props
    const w2 = nextProps.winWheelItems

    if (w1.length && w2.length) {
      if (w1[0].id !== w2[0].id) {
        this.onWinWheelUpdate(w2)
      }
    }
  }

  componentWillUnmount() {
    this.scripts.forEach(script => document.body.removeChild(script))
  }

  onWheelSpin(segmetToWin) {
    this.wheel.start(segmetToWin)
  }

  onWinWheelUpdate(winItems) {
    const { winWheelItems } = this.props
    const mainPrizeFrame = `${imagesPath}/main_prize_frame_overlay.svg`
    const mainPrizeFrameOnTop = true

    Spin2WinWheel.reset()

    this.wheel = new Spin2WinWheel()
    this.wheel.init({
      data: getSpinWheelSettings({
        segments: winItems || winWheelItems,
        mainPrizeFrame,
        mainPrizeFrameOnTop,
      }),
      onResult: this.onWinCallback,
      onError: err => console.log('onError:', err),
    })
  }

  onWinCallback(segment) {
    this.props.onWheelSpinComplete(segment)
  }

  render() {
    const { className, size } = this.props
    return (
      <WheelHolder className={className} size={size}>
        <WheelBackground />
        <WheelSVG />
      </WheelHolder>
    )
  }
}

WinWheelSVG.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  winWheelItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
  onRef: PropTypes.func.isRequired,
  onWheelSpinComplete: PropTypes.func.isRequired,
}

export default WinWheelSVG
