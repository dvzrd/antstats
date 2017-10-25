import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers';
import Async from './middlewares/async'
import MainLayout from './layouts/Main'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const ROOT_URL = 'https://antserver-blocjgjbpw.now.sh/graphql'
const networkInterface = createNetworkInterface({
  uri: ROOT_URL
})
const client = new ApolloClient({
  networkInterface
})
const createStoreWithMiddleware = applyMiddleware(Async)(createStore)

ReactDOM.render(
  <ApolloProvider store={createStoreWithMiddleware(reducers)} client={client}>
    <MainLayout />
  </ApolloProvider>
  , document.getElementById('root')
)
registerServiceWorker();
