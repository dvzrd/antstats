import { combineReducers } from 'redux'
import antsReducer from './ants'

const rootReducer = combineReducers({
  ants: antsReducer
})

export default rootReducer
