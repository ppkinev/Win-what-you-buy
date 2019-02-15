import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { startFireworks, stopFireworks } from './firework-animation'

const FireworksHolder = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  min-width: 300px;
`
FireworksHolder.propTypes = {
  height: PropTypes.number,
}

class Fireworks extends Component {
  componentDidMount() {
    startFireworks({ holder: this.fireworksHolder })
  }

  componentWillUnmount() {
    stopFireworks()
  }

  render() {
    const {className, height} = this.props
    const addRef = (elem) => {
      this.fireworksHolder = elem
    }

    return <FireworksHolder className={className} innerRef={addRef} height={height} />
  }
}

Fireworks.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
}

export default Fireworks
