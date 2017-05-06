import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers'

const configureStore = (history) => {
  let middleware = routerMiddleware(history)

  let enhancer = applyMiddleware(thunk, middleware)

  if (process.env.NODE_ENV == 'development') {
    enhancer = composeWithDevTools(enhancer)
  }

  return createStore(
    rootReducer,
    enhancer
  )
};

export default configureStore
