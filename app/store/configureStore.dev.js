import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

const configureStore = (history) => {
  const logger = createLogger()
  const router = routerMiddleware(history)

  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk, logger, router)
    )
  )
}

export default configureStore
