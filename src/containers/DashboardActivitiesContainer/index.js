import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ActivitiesPanel } from 'components'

import { fromActivities, fromUser } from 'store/selectors'
import { getAllActivitiesRequest, getPersonalActivitiesRequest } from 'store/actions'

const FILTERS = [
  { id: 'all', value: 'All' },
]

const FILTERS_AUTHORIZED = [
  { id: 'all', value: 'All' },
  { id: 'personal', value: 'Personal' },
  // { id: 'friends', value: 'Friends' },
]

const ACTIVITIES = [{ id: 'act1', userId: 'u1' }, { id: 'act2', userId: 'u2' }, {
  id: 'act3',
  userId: 'u3',
}, { id: 'act4', userId: 'u4' }, { id: 'act5', userId: 'u5' }]

const TAKE = 5

class DashboardActivitiesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeFilterID: FILTERS[0].id,
      selectedUserId: null,
      skip: 0,
    }

    this.onFilterClick = this.onFilterClick.bind(this)
    this.onShowMoreClick = this.onShowMoreClick.bind(this)
    this.onUserClick = this.onUserClick.bind(this)
    this.onUserPanelClose = this.onUserPanelClose.bind(this)
  }

  componentDidMount() {
    this.props.getAllActivities({ skip: this.state.skip, take: TAKE })
  }

  onFilterClick(id) {
    this.setState({ activeFilterID: id }, () => {
      if (id === 'all') this.props.getAllActivities({ skip: this.state.skip, take: TAKE })
      else this.props.getPersonalActivities({ skip: this.state.skip, take: TAKE })
    })
  }

  onShowMoreClick() {
    this.props.history.push('activities')
  }

  onUserClick(userId) {
    this.setState({ selectedUserId: userId })
  }

  onUserPanelClose() {
    this.setState({ selectedUserId: null })
  }

  render() {
    const { activeFilterID, selectedUserId } = this.state
    const { isUserAuthorized, activities, userSelfImage, userSelfId } = this.props
    const filters = isUserAuthorized ? FILTERS_AUTHORIZED : FILTERS

    return (
      <ActivitiesPanel
        filters={filters}
        activeFilterID={activeFilterID}
        onFilterClick={this.onFilterClick}
        onShowMoreClick={this.onShowMoreClick}

        selectedUserId={selectedUserId}
        onUserClick={this.onUserClick}
        onUserPanelClose={this.onUserPanelClose}

        activities={activities}
        userSelfImage={userSelfImage}
      />
    )
  }
}

DashboardActivitiesContainer.propTypes = {
  history: PropTypes.object,

  activities: PropTypes.array,
  getAllActivities: PropTypes.func,
  getPersonalActivities: PropTypes.func,

  isUserAuthorized: PropTypes.bool,
  userSelfImage: PropTypes.string,
}

const mapStateToProps = state => ({
  activities: fromActivities.getActivities(state),
  isUserAuthorized: fromUser.isUserAuthorized(state),
  userSelfImage: fromUser.getProfileInfo(state).image,
  userSelfId: fromUser.getProfileInfo(state).id,
})
const mapDispatchToProps = dispatch => ({
  getAllActivities: ({ skip, take }) => dispatch(getAllActivitiesRequest({ skip, take })),
  getPersonalActivities: ({ skip, take }) => dispatch(getPersonalActivitiesRequest({ skip, take })),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardActivitiesContainer))
