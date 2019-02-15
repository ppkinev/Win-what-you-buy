import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../themes/default'
import { imagesPath } from '../../../config'

const WheelContainer = styled.div``

const Wheel = ({ className }) => {
  return (
    <WheelContainer className={className}>
      <svg
        style={{
          fontFamily: theme.fonts.main,
          paddingTop: '32px',
        }}
        className="wheelSVG"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        textRendering="optimizeSpeed"
      >
        <defs>
          <filter id="shadow" x="-100%" y="-100%" width="550%" height="550%">
            <feOffset in="SourceAlpha" dx="0" dy="0" result="offsetOut"></feOffset>
            <feGaussianBlur stdDeviation="9" in="offsetOut" result="drop" />
            <feColorMatrix
              in="drop"
              result="color-out"
              type="matrix"
              values="0 0 0 0   0
              0 0 0 0   0
              0 0 0 0   0
              0 0 0 .3 0"
            />

            <feBlend in="SourceGraphic" in2="color-out" mode="normal" />
          </filter>
          <pattern id="peg-image" patternUnits="userSpaceOnUse" width="100" height="100">
            <image xlinkHref={`${imagesPath}/wheel_pin.png`} x="0" y="0" width="65" height="119" />
          </pattern>
        </defs>
        <g className="mainContainer">
          <g className="wheel" />
        </g>
        <g className="centerCircle" />
        <g className="wheelOutline" />
        <g className="pegContainer" opacity="1">
          <path
            className="peg"
            visibility="hidden"
            fill="url(#peg-image)"
            d="M33.8,0C8.6,0-2.3,23.8,0.4,41.3c5.2,33.1,33.4,64.5,33.4,64.5S62,74.4,67.2,41.3C69.9,23.8,59,0,33.8,0z"
          />
        </g>
        <g className="valueContainer" />
      </svg>
      <div className="toast" style={{ display: 'none' }}>
        <p />
      </div>
    </WheelContainer>
  )
}

Wheel.propTypes = {
  className: PropTypes.string,
}

export default Wheel
