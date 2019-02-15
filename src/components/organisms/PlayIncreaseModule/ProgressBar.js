import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CircularProgressbar from 'react-circular-progressbar'

import progressBarStyles from './styles'

import theme from '../../themes/default'

const GradientSVG = ({ startColor, endColor, idCSS }) => {
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={'rotate(-10)'}>
          <stop offset="10%" stopColor={endColor} />
          <stop offset="70%" stopColor={startColor} />
        </linearGradient>
      </defs>
    </svg>
  )
}

GradientSVG.propTypes = {
  startColor: PropTypes.string.isRequired,
  endColor: PropTypes.string.isRequired,
  idCSS: PropTypes.string.isRequired,
}


const GradientHolder = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
`

const AbsolutePositionedProgressBar = styled(CircularProgressbar)`
  position: absolute;
  top: 0;
  left: 0;
`

class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.styleTag = document.createElement('style')
    this.idCSS = 'progress-bar-id'
  }

  componentDidMount() {
    this.styleTag.type = 'text/css'
    this.styleTag.appendChild(document.createTextNode(progressBarStyles(this.idCSS)))

    document.head.appendChild(this.styleTag)
  }

  componentWillUnmount() {
    document.head.removeChild(this.styleTag)
  }

  render() {
    const { percent } = this.props
    const MAX = 71.4
    const STROKE_WIDTH = 14

    // MAX PERCENTAGE - 71.4
    const percentage = MAX * (percent / 100)

    return (
      <GradientHolder>
        <GradientSVG
          idCSS={this.idCSS}
          startColor={theme.palette.gold[1]}
          endColor={theme.palette.main[1]}
        />
        <AbsolutePositionedProgressBar
          percentage={MAX}
          strokeWidth={STROKE_WIDTH}
          styles={{
            path: { stroke: theme.palette.grey[3] },
            trail: { stroke: 'transparent' },
          }}
        />
        <AbsolutePositionedProgressBar
          percentage={percentage}
          strokeWidth={STROKE_WIDTH}
          styles={{
            trail: { stroke: 'transparent' },
          }}
        />
      </GradientHolder>
    )
  }
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
}

ProgressBar.defaultProps = {
  percent: 0,
}

export default ProgressBar
