import { combineReducers } from 'redux'
import antsReducer from './ants'
import calculationsReducer from './calculations'

const rootReducer = combineReducers({
  ants: antsReducer,
  calculations: calculationsReducer
})

export default rootReducer
