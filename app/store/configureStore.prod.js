import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from 'reducers'

const configureStore = history => {
  const router = routerMiddleware(history)

  return createStore(rootReducer, applyMiddleware(thunk, router))
}

export default configureStore
