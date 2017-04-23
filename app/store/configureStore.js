import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'

const configureStore = (history) => {
  let middleware = routerMiddleware(history)

  return createStore(
    rootReducer,
    applyMiddleware(thunk, middleware)
  )
};

export default configureStore
