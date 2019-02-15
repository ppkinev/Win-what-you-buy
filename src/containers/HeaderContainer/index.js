import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  sideMenuOpen,
  sideMenuClose,
  checkIfUserAuthorized,
  getUserRequest,
  getNewNotificationsAmountRequest,
} from 'store/actions'
import { fromGeneral, fromUser, fromNotifications } from 'store/selectors'

import { Header } from 'components'
import { imagesPath } from '../../config'

class HeaderContainer extends Component {
  constructor(props) {
    super(props)

    const { pathname } = props.location

    this.state = {
      menu: pathname.replace('/', ''),
      isNotificationsPopupShown: false,
    }

    this.onMenuItemClick = this.onMenuItemClick.bind(this)
    this.onNotificationsClick = this.onNotificationsClick.bind(this)
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.props.checkIfUserAuthorized()
    }, 3000)
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isUserAuthorized && nextProps.isUserAuthorized) {
      this.props.getUser()
    }

    if (nextProps.isUserAuthorized && !this.unreadNotificationsInterval) {
      this.props.getUnreadNotifications()
      this.unreadNotificationsInterval = window.setInterval(() => {
        this.props.getUnreadNotifications()
      }, 20000)
    }

    if (!nextProps.isUserAuthorized && this.unreadNotificationsInterval) {
      window.clearInterval(this.unreadNotificationsInterval)
    }
  }

  onMenuItemClick(menu) {
    this.setState({ menu })
    this.props.history.push(menu)
  }

  onNotificationsClick() {
    this.setState({ isNotificationsPopupShown: !this.state.isNotificationsPopupShown })
  }

  render() {
    const { isNotificationsPopupShown } = this.state
    const {
      isSideMenuOpened,
      sideMenuOpen,
      sideMenuClose,

      isUserAuthorized,

      userProfile,

      unreadNotifications,
    } = this.props

    return (
      <Header
        brandLogo={`${imagesPath}/logo.png`}
        userAuthorized={userProfile}
        onMenuItemClick={this.onMenuItemClick}
        activeMenuItem={this.state.menu}

        unreadNotifications={unreadNotifications}
        onNotificationsClick={this.onNotificationsClick}
        isNotificationsPopupShown={isNotificationsPopupShown}
        onMobileMenuOpen={sideMenuOpen}
        onMobileMenuClose={sideMenuClose}
        isMobileMenuOpened={isSideMenuOpened}

        isUserAuthorized={isUserAuthorized}
      />
    )
  }
}


HeaderContainer.propTypes = {
  history: PropTypes.object,
  location: PropTypes.objectOf(PropTypes.shape({
    pathname: PropTypes.string,
  })),
  isSideMenuOpened: PropTypes.bool,
  sideMenuOpen: PropTypes.func.isRequired,
  sideMenuClose: PropTypes.func.isRequired,

  isUserAuthorized: PropTypes.bool,
  checkIfUserAuthorized: PropTypes.func,
  getUser: PropTypes.func,
  userProfile: PropTypes.object,

  unreadNotifications: PropTypes.number,
  getUnreadNotifications: PropTypes.func,
}

const mapStateToProps = state => ({
  isSideMenuOpened: fromGeneral.isSideMenuOpened(state),
  isUserAuthorized: fromUser.isUserAuthorized(state),
  userProfile: fromUser.getProfileInfo(state),
  unreadNotifications: fromNotifications.getUnreadNotificationsAmount(state),
})
const mapDispatchToProps = dispatch => ({
  sideMenuOpen: () => dispatch(sideMenuOpen()),
  sideMenuClose: () => dispatch(sideMenuClose()),
  checkIfUserAuthorized: () => dispatch(checkIfUserAuthorized()),
  getUser: () => dispatch(getUserRequest()),
  getUnreadNotifications: () => dispatch(getNewNotificationsAmountRequest()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer))
