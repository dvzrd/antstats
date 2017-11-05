import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers';
import App from './containers/App'
import registerServiceWorker from './utils/registerServiceWorker'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj9lxvyw87kz90121d068pvcr'
})
const client = new ApolloClient({
  networkInterface
})
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

render(
  <ApolloProvider store={createStoreWithMiddleware(reducers)} client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
)
registerServiceWorker()

injectGlobal`
  html {
    overflow-x: hidden;
    overflow-y: auto;
  }

  body {
    margin: 0;
    padding: 0;
    color: #1C1C1C;
    font-family: 'Kanit', 'Open Sans', Arial, sans-serif;
    font-weight: normal;
    line-height: 1.5;
  }

  ::-moz-selection {
    background-color: #ffe7e0;
    text-shadow: none;
  }

  ::selection {
    background-color: #ffe7e0;
    text-shadow: none;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  img {
    width: 100%;
    margin: 0 auto;
  }

  h1, h2, h3,
  h4, h5, h6 {
    margin: 2em auto 1em;
    color: #050503;
    font-weight: bold;
    line-height: 1;
  }

  h1 small, h2 small, h3 small,
  h4 small, h5 small, h6 small {
    display: block;
    margin-top: 0.5em;
    font-size: 50%;
    font-weight: normal;
  }

  a {
    position: relative;
    color: #FC4000;
    transition: all 250ms;
  }

  a:hover {
    color: #E23C03;
  }

  section {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 0;
  }

  figure {
    display: block;
    position: relative;
    width: 100%;
    max-width: 38em;
    height: auto;
    margin: 0 auto;
    padding: 1em;
  }

  @media only screen and (min-width: 48em) {
    figure {
      max-width: 48em;
    }
  }
`
