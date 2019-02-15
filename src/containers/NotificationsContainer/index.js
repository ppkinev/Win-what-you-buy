import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NotificationsPanel } from 'components'
import { fromNotifications } from 'store/selectors'
import {
  getNotificationsRequest,
  markNotificationsAsReadRequest,
} from 'store/actions'

const TAKE = 20

class NotificationsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      skip: 0,
    }

    this.onItemClick = this.onItemClick.bind(this)
    this.onMarkItemAsRead = this.onMarkItemAsRead.bind(this)
    this.onMarkAllItemsAsRead = this.onMarkAllItemsAsRead.bind(this)
  }

  componentDidMount() {
    this.props.getNotifications({ skip: 0, take: TAKE })
  }

  onMarkItemAsRead(id) {
    this.props.markAsRead(id)
  }

  onMarkAllItemsAsRead() {
    this.props.markAllAsRead()
  }

  onItemClick(id) {
    let page = '/'
    let pageId

    const notification = this.props.notifications.find(item => item.id === id)
    switch (notification.type) {
      case 'NewCommissionUser':
      case 'CommissionConfirmedUser':
        page = 'credits'
        break
      case 'AcceptFriendRequest':
      case 'SendFriendRequest':
        page = 'user'
        pageId = notification.User.UserId
        break
      case 'WinTheDrawRelatedUser':
      case 'WinTheDrawUser':
        page = 'user'
        pageId = notification.Draw.Winner.UserId
        break
      case 'WinTheMatchQuizUser':
        page = 'score-predictor'
        break
      case 'WinTheMatchQuizRelatedUser':
        page = 'user'
        pageId = notification.Winner.UserId
        break
      default:

    }

    if (this.props.history.location.pathname === page) {
      this.props.history.replace({ pathname: page, state: { id: pageId } })
    } else {
      this.props.history.push({ pathname: page, state: { id: pageId } })
    }

    window.console.log('Item clicked', this.props.notifications.find(item => item.id === id))
  }

  render() {
    const { notifications, isLoading } = this.props

    return (
      <NotificationsPanel
        className={this.props.className}
        notifications={notifications}
        onMarkAllAsRead={this.onMarkAllItemsAsRead}
        onMarkItemAsRead={this.onMarkItemAsRead}
        onItemClick={this.onItemClick}
        isLoading={isLoading}
      />
    )
  }
}

NotificationsContainer.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,

  notifications: PropTypes.array,

  getNotifications: PropTypes.func,
  markAsRead: PropTypes.func,
  markAllAsRead: PropTypes.func,

  isLoading: PropTypes.bool,
}

const mapStateToProps = state => ({
  notifications: fromNotifications.getNotifications(state),
  isLoading: fromNotifications.isNotificationsLoading(state),
})
const mapDispatchToProps = dispatch => ({
  getNotifications: ({ skip, take }) => dispatch(getNotificationsRequest({ skip, take })),
  markAsRead: id => dispatch(markNotificationsAsReadRequest([id])),
  markAllAsRead: () => dispatch(markNotificationsAsReadRequest(null)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer))
