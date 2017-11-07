import { 
  MAP_STATE_TO_ANTS, RUN_CALCULATIONS, 
  END_CALCULATIONS, RESET_CALCULATIONS 
} from '../actions'

const INITIAL_STATE = {
    calculating: false,
    calculated: false,
    calculationsByAnt: {},
}

const ants = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RUN_CALCULATIONS:
      return {
        ...state,
        calculating: true
      }
    case END_CALCULATIONS:
      return {
        ...state,
        calculating: false,
        calculated: true
      }
    case MAP_STATE_TO_ANTS:
      console.log(action.reducedAnts, state)
      return {
        ...state,
        calculationsByAnt: action.reducedAnts
      }
    case RESET_CALCULATIONS:
    default:
      return state
  }
}

export default ants