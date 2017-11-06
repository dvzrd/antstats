import { 
  REQUEST_CALCULATION, RECEIVE_CALCULATION,  
  SET_CALCULATION, RESET_CALCULATION
} from '../actions/index';

const calculations = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_CALCULATION:
      return {
        ...state,
        ant: {
          ...action.ant,
          calculating: true,
          calculation: 0
        }
      }
    case RECEIVE_CALCULATION:
      return {
        ...state,
        ant: {
          ...action.ant,
          calculating: false,
          calculation: action.calculation
        }
      }
    case SET_CALCULATION:
      return {
        ...state,
        ant: action.ant
      }
    case RESET_CALCULATION:
    default:
      return state
  }
}

export default calculations