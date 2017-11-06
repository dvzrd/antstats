import { 
  REQUEST_CALCULATION, RECEIVE_CALCULATION,  
  SET_CALCULATION, RESET_CALCULATION
} from '../actions/index';

const INITIAL_STATE = {
  ant: {},
  calculating: false,
  calculated: false,
  calculation: 0
}

const calculation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CALCULATION:
      return {
        ...state,
        ant: action.ant,
        calculating: true
      }
    case RECEIVE_CALCULATION:
      return {
        ...state,
        ant: action.ant,
        calculation,
        calculating: false
      }
    case SET_CALCULATION:
      return {
        ...state,
        ant: action.ant,
        calculation,
        calculated: true
      }
    case RESET_CALCULATION:
    default:
      return state
  }
}

export default calculation