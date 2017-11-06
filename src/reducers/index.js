import { combineReducers } from 'redux'
import antsReducer from './ants'
import calculationReducer from './calculation'

const rootReducer = combineReducers({
  ants: antsReducer,
  calculation: calculationReducer
})

export default rootReducer
