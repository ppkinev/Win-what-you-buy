// https://github.com/diegohaz/arc/wiki/Example-app
import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { basename } from 'config'
import configureStore from 'store/configure'
import App from 'components/App'

const store = configureStore({})

const launchWhenWidgetReady = (callback) => {
  const interval = window.setInterval(() => {
    if (window._DGPublic && window._DGPublic.getAccessToken) {
      window.clearInterval(interval)

      // not launching app if in an iframe cuz of open-id auth
      if (callback && window.parent === window) callback()
    }
  }, 100)
}

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </Provider>
)

const root = document.getElementById('app')
// remove wrapping launchWhenWidgetReady method when works without widget
// launchWhenWidgetReady(() => {
//   render(renderApp(), root)
// })
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
  // launchWhenWidgetReady(() => {
  //   module.hot.accept('components/App', () => {
  //     require('components/App')
  //     render(renderApp(), root)
  //   })
  // })
}
