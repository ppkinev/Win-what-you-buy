import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import PageTemplate from '../../templates/PageTemplate'
import PageDummy from '../../atoms/PageDummy'

class DrawsPage extends Component {
  /* eslint-disable no-underscore-dangle */
  componentDidMount() {
    const { hash } = this.props.location
    if (window._DGPublic && window._DGPublic.openWidgetView) {
      window.setTimeout(() => {
        window.console.log('draws', hash.substr(1, hash.length))
        window._DGPublic.openWidgetView('draws', hash.substr(1, hash.length))
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

DrawsPage.propTypes = {
  location: PropTypes.object,
}

export default withRouter(DrawsPage)
