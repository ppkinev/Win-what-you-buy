import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { DashboardUserPanel } from 'components'
import { imagesPath } from '../../config'

const BADGES = [
  {
    id: '22',
    image: `${imagesPath}/badges/assistant.svg`,
    title: 'badge #1',
    description: 'This is some description on how to obtain this badge',
  },
  {
    id: '33',
    image: `${imagesPath}/badges/expert.svg`,
    title: 'badge #2',
    description: 'This is some description on how to obtain this badge',
  },
  {
    id: '44',
    image: `${imagesPath}/badges/friendly.svg`,
    title: 'badge #3',
    description: 'This is some description on how to obtain this badge',
  },
  {
    id: '55',
    image: `${imagesPath}/badges/geek.svg`,
    title: 'badge #4',
    description: 'This is some description on how to obtain this badge',
  },
  {
    id: '66',
    image: `${imagesPath}/badges/guru.svg`,
    title: 'badge #5',
    description: 'This is some description on how to obtain this badge',
  },
]

class DashboardUserContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openedBadgeId: null,
    }

    this.onBadgeClick = this.onBadgeClick.bind(this)
    this.onBadgePanelClose = this.onBadgePanelClose.bind(this)
  }

  onBadgeClick(id) {
    this.setState({ openedBadgeId: id })
  }

  onBadgePanelClose() {
    this.setState({ openedBadgeId: null })
  }

  render() {
    const { className, selectedUserId, onPanelClose } = this.props
    const { openedBadgeId } = this.state

    return (
      <DashboardUserPanel
        className={className}
        id={'addw123412'}
        name={'Jerry McDonald'}
        image={'https://picsum.photos/200?image=75'}
        levelImage={'https://picsum.photos/200?image=78'}
        levelTitle={'Cool level'}
        levelDescription={''}
        friendsAmount={35}
        pointsAmount={23}
        badges={BADGES}
        onBadgeClick={this.onBadgeClick}
        onBadgePanelClose={this.onBadgePanelClose}
        openedBadgeId={openedBadgeId}
        drawsEntered={4}
        drawsWon={2}
        creditsWon={35}
        connectionsAmount={57}
        joinDate={'25/05/2018'}
        onClose={onPanelClose}
      />
    )
  }
}

DashboardUserContainer.propTypes = {
  className: PropTypes.string.isRequired,
  selectedUserId: PropTypes.string.isRequired,
  onPanelClose: PropTypes.func.isRequired,
}

export default DashboardUserContainer
