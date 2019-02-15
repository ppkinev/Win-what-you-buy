import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import PageTemplate from '../../templates/PageTemplate'
import PageDummy from '../../atoms/PageDummy'

class UserPage extends Component {
  /* eslint-disable no-underscore-dangle */
  componentDidMount() {
    if (window._DGPublic && window._DGPublic.openWidgetView) {
      window.setTimeout(() => {
        window._DGPublic.openWidgetView('public', this.props.location.state.id)
      }, 600)
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.location.state.id !== nextProps.location.state.id) {
      window._DGPublic.openWidgetView('public', nextProps.location.state.id)
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

UserPage.propTypes = {
  location: PropTypes.object,
}

export default withRouter(UserPage)
