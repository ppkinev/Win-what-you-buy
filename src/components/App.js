/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { getAppRequest, iframeMessageSend } from 'store/actions'
import { fromApp } from 'store/selectors'

import { Fetching } from 'components'

// using alias name
// I use PAGES as main places to build layouts with all components
// and wrapping them with containers having all logic of its page
// if the logic cannot be put inside smaller components
import PlayPage from '../containers/PlayPageContainer'
import RetailerPage from '../containers/RetailersPageContainer'
import DashboardPage from '../components/pages/DashboardPage'

// widget pages
import EarnPage from '../components/pages/EarnPage'
import PointsPage from '../components/pages/PointsPage'
import CreditsPage from '../components/pages/CreditsPage'
import DrawsPage from '../components/pages/DrawsPage'
import ProfilePage from '../components/pages/ProfilePage'
import ActivitiesPage from '../components/pages/ActivitiesPage'
import LeaderboardPage from '../components/pages/LeaderboardPage'
import CollectPage from '../components/pages/CollectPage'
import ScorePredictorPage from '../components/pages/ScorePredictorPage'
import UserPage from '../components/pages/UserPage'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica', sans-serif;
    color: ${theme.palette.text[0]};
    background-color: ${theme.palette.main[0]};
  }
`

class App extends Component {
  componentWillMount() {
    this.props.getApp()

    if (!window.YT) {
      const script = document.createElement('script')
      script.src = 'https://www.youtube.com/player_api'
      document.body.appendChild(script)
    }
  }

  componentWillUpdate(nextProps) {
    if (!this.props.isActive && nextProps.isActive) {
      this.props.sendMessageToParent({
        isActive: true,
      })
    }
  }

  render() {
    return this.props.isActive ? (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/play" component={PlayPage} />
          <Route path="/shop" component={RetailerPage} />

          <Route path="/earn" component={EarnPage} />
          <Route path="/draws" component={DrawsPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/points" component={PointsPage} />
          <Route path="/credits" component={CreditsPage} />
          <Route path="/leaderboard" component={LeaderboardPage} />
          <Route path="/activities" component={ActivitiesPage} />
          <Route path="/collect" component={CollectPage} />
          <Route path="/score-predictor" component={ScorePredictorPage} />
          <Route path="/user" component={UserPage} />
        </Switch>
      </ThemeProvider>
    ) : <Fetching />
  }
}

App.propTypes = {
  isActive: PropTypes.bool,
  getApp: PropTypes.func,
  sendMessageToParent: PropTypes.func,
}

const mapStateToProps = state => ({
  isActive: fromApp.isActive(state),
})

const mapDispatchToProps = dispatch => ({
  getApp: () => dispatch(getAppRequest()),
  sendMessageToParent: message => dispatch(iframeMessageSend(message)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
