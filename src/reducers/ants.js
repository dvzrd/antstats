import { RUN_CALCULATIONS, END_CALCULATIONS, RESET_CALCULATIONS } from '../actions'

const INITIAL_STATE = {
    calculating: false,
    calculated: {}
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
        calculated: action.calculated
      }
    case RESET_CALCULATIONS:
    default:
      return state
  }
}

export default ants