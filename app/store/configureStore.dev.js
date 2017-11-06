import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

const configureStore = (history) => {
  const router = routerMiddleware(history)

  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk, router)
    )
  )
}

export default configureStore
