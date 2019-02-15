import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import { DrawsPanel } from 'components'
import { fromDraws } from 'store/selectors'
import { getDrawsRequest } from 'store/actions'

const fixN = num => num > 9 ? num : `0${num}`

class DashboardDrawsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      interval: window.setInterval(() => {
        this.updateTime()
      }, 1000),
      time: null,
    }

    this.onShowAllDraws = this.onShowAllDraws.bind(this)
    this.onDrawEnter = this.onDrawEnter.bind(this)
  }

  componentDidMount() {
    this.props.getDraws({
      skip: 0, take: 1, my: false, upcoming: true,
    })
  }

  componentWillUnmount() {
    if (this.state.interval) window.clearInterval(this.state.interval)
  }

  onDrawEnter() {
    this.props.history.push(`draws#${this.props.closestDraw.id}`)
  }

  onShowAllDraws() {
    this.props.history.push('draws')
  }

  updateTime() {
    const { endDate } = this.props.closestDraw

    if (endDate) {
      const _second = 1000
      const _minute = _second * 60
      const _hour = _minute * 60
      const _day = _hour * 24

      const distance = (new Date(endDate)) - new Date()

      const days = Math.floor(distance / _day)
      const hours = Math.floor((distance % _day) / _hour)
      const minutes = Math.floor((distance % _hour) / _minute)
      const seconds = Math.floor((distance % _minute) / _second)

      if (distance < 0) {
        const formatted = moment(endDate).fromNow()
        const ended = formatted.indexOf('ago') > -1
        const prefix = ended ? 'ended' : 'ends'

        this.setState({
          time: `${prefix} ${formatted}`,
        })
      } else {
        this.setState({
          time: `${fixN(days)}d ${fixN(hours)}h ${fixN(minutes)}m ${fixN(seconds)}s left`,
        })
      }
    }
  }

  render() {
    const { closestDraw: { title, description, image, playersCount, recentPlayers }, isDrawsLoading } = this.props
    return !isDrawsLoading && (
      <DrawsPanel
        title={title}
        description={description}
        image={image}
        endDate={this.state.time}
        usersDone={recentPlayers}
        usersDoneTotal={playersCount}

        onEnter={this.onDrawEnter}
        onShowAll={this.onShowAllDraws}
      />
    )
  }
}

DashboardDrawsContainer.propTypes = {
  history: PropTypes.object,

  closestDraw: PropTypes.object,
  getDraws: PropTypes.func,
  isDrawsLoading: PropTypes.bool,
}

const mapStateToProps = state => ({
  closestDraw: fromDraws.getDraws(state).length ? fromDraws.getDraws(state)[0] : {},
  isDrawsLoading: fromDraws.isDrawsLoading(state),
})
const mapDispatchToProps = dispatch => ({
  getDraws: ({ skip, take, my, upcoming, sortAsc }) => dispatch(getDrawsRequest({ skip, take, my, upcoming, sortAsc })),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardDrawsContainer))
