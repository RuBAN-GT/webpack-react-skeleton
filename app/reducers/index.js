import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

const reducers = { router }

let req = require.context('.', false, /\.js?$/)
req.keys().forEach(key => {
  const name = key.replace(/^\.\/(\w+)\.js?$/i, '$1')

  if (name && name != 'index') reducers[name] = req(key).default
})

const rootReducer = combineReducers(reducers)

export default rootReducer
