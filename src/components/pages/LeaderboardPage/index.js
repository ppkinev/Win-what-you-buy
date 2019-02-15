import React, { Component } from 'react'

import PageTemplate from '../../templates/PageTemplate'
import PageDummy from '../../atoms/PageDummy'

class LeaderboardPage extends Component {
  /* eslint-disable no-underscore-dangle */
  componentDidMount() {
    if (window._DGPublic && window._DGPublic.openWidgetView) {
      window.setTimeout(() => {
        window._DGPublic.openWidgetView('leaderboard')
      }, 600)
    }
  }

  componentWillUnmount() {
    if (window._DGPublic && window._DGPublic.closeWidget) {
      window._DGPublic.closeWidget()
    }
  }

  render() {
    return (
      <PageTemplate>
        <PageDummy />
      </PageTemplate>
    )
  }
}

export default LeaderboardPage
