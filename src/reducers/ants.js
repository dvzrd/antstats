import { FETCH_ANTS, CALCULATE_ANTS, GET_CALCULATION, SET_CALCULATION } from '../actions/index';

const INITIAL_STATE = { all: [], calculatedAnt: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_ANTS:
      return { ...state, all: action.payload }
    case CALCULATE_ANTS:
      return { ...state, all: action.payload }
    case GET_CALCULATION:
      return { ...state, calculatedAnt: action.payload }
    case SET_CALCULATION:
      return { ...state, all: action.payload }
    default:
      return state;
  }
}
