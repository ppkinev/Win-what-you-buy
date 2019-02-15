import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { WinnersPanel } from 'components'

const TIME_FILTERS = [
  { id: 'all', value: 'All time' },
  { id: 'last_month', value: 'Last month' },
]
const RANK_FILTERS = [
  { id: 'highest', value: 'Highest' },
  { id: 'lowest', value: 'Lowest' },
]

const WINNERS = [
  { id: '1', image: 'https://picsum.photos/200?image=10' },
  { id: '2', image: 'https://picsum.photos/200?image=11' },
  { id: '3', image: 'https://picsum.photos/200?image=12' },
  { id: '4', image: 'https://picsum.photos/200?image=13' },
  { id: '5', image: 'https://picsum.photos/200?image=14' },
  { id: '6', image: 'https://picsum.photos/200?image=15' },
  { id: '7', image: 'https://picsum.photos/200?image=16' },
  { id: '8', image: 'https://picsum.photos/200?image=17' },
  { id: '9', image: 'https://picsum.photos/200?image=18' },
  { id: '10', image: 'https://picsum.photos/200?image=19' },
  { id: '11', image: 'https://picsum.photos/200?image=20' },
  { id: '12', image: 'https://picsum.photos/200?image=21' },
  { id: '13', image: 'https://picsum.photos/200?image=22' },
  { id: '14', image: 'https://picsum.photos/200?image=23' },
  { id: '15', image: 'https://picsum.photos/200?image=24' },
  { id: '16', image: 'https://picsum.photos/200?image=25' },
  { id: '17', image: 'https://picsum.photos/200?image=26' },
  { id: '18', image: 'https://picsum.photos/200?image=27' },
  { id: '19', image: 'https://picsum.photos/200?image=28' },
  { id: '20', image: 'https://picsum.photos/200?image=29' },
]

class DashboardWinnersContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTimeFilter: TIME_FILTERS[0].id,
      selectedRankFilter: RANK_FILTERS[0].id,

      selectedWinnerId: null,
      allWinnersShown: false,
    }

    this.onTimeFilterChange = this.onTimeFilterChange.bind(this)
    this.onRankFilterChange = this.onRankFilterChange.bind(this)
    this.onWinnerClick = this.onWinnerClick.bind(this)
    this.onWinnerPanelClose = this.onWinnerPanelClose.bind(this)
    this.onShowAllWinners = this.onShowAllWinners.bind(this)
    this.onHideAllWinnersPanel = this.onHideAllWinnersPanel.bind(this)
  }

  onTimeFilterChange(ev) {
    this.setState({ selectedTimeFilter: ev.target.value })
  }

  onRankFilterChange(ev) {
    this.setState({ selectedRankFilter: ev.target.value })
  }

  onShowAllWinners() {
    this.setState({ allWinnersShown: true })
  }

  onHideAllWinnersPanel() {
    this.setState({ allWinnersShown: false })
  }

  onWinnerClick(winner) {
    this.setState({ selectedWinnerId: winner })
  }

  onWinnerPanelClose() {
    this.setState({ selectedWinnerId: null })
  }

  render() {
    const { selectedTimeFilter, selectedRankFilter, selectedWinnerId, allWinnersShown } = this.state
    return (
      <WinnersPanel
        timeFilters={TIME_FILTERS}
        onTimeFilterChange={this.onTimeFilterChange}
        selectedTimeFilter={selectedTimeFilter}

        rankFilters={RANK_FILTERS}
        onRankFilterChange={this.onRankFilterChange}
        selectedRankFilter={selectedRankFilter}

        winnersWheelTitle={'All time winners'}
        usersAmount={340}
        friendsWinnersPercent={70}
        connectionsWinnersPercent={92}

        friendsWinnersAmount={42}
        connectionsWinnersAmount={118}
        allWinnersAmount={160}

        winners={WINNERS}
        onWinnerClick={this.onWinnerClick}

        selectedWinnerId={selectedWinnerId}
        onWinnerPanelClose={this.onWinnerPanelClose}

        onHideAllWinners={this.onHideAllWinnersPanel}
        onShowAllWinners={this.onShowAllWinners}
        allWinnersShown={allWinnersShown}
      />
    )
  }
}

export default DashboardWinnersContainer
