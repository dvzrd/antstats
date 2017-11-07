import { arrayToObject, mutateObjects } from '../utils'
import { generateAntWinLikelihoodCalculator } from '../utils/generateAntWinLikelihoodCalculator'

export const MAP_STATE_TO_ANTS = 'MAP_STATE_TO_ANTS'
export const RUN_CALCULATIONS = 'RUN_CALCULATIONS'
export const END_CALCULATIONS = 'END_CALCULATIONS'
export const RESET_CALCULATIONS = 'RESET_CALCULATIONS'
export const REQUEST_CALCULATION = 'REQUEST_CALCULATION'
export const RECEIVE_CALCULATION = 'RECEIVE_CALCULATION'
export const SET_CALCULATION = 'SET_CALCULATION'
export const RESET_CALCULATION = 'RESET_CALCULATION'

export const mapStateToAnts = ants => {
  // @TODO: move to reducer
  const members = {
    calculating: true,
    calculation: 0
  }
  const mutatedAnts = mutateObjects(ants, members)
  const reducedAnts = arrayToObject(mutatedAnts)

  console.log(mutatedAnts)
  console.log(reducedAnts)
  return {
    type: MAP_STATE_TO_ANTS,
    reducedAnts
  }
}

export const runCalculations = ants => ({
  type: RUN_CALCULATIONS,
  ants
})

export const endCalculations = ants => ({
  type: END_CALCULATIONS,
  ants
})

export const resetCalculations = ants => ({
  type: RESET_CALCULATIONS,
  ants
})

export const requestCalculation = ant => {
  console.log('REQUEST CALCULATION ', ant)

  return {
    type: REQUEST_CALCULATION,
    ant 
  }
}

export const receiveCalculation = (ant, calculation) => {
  console.log('RECEIVE CALCULATION ', ant, calculation)

  return {
    type: RECEIVE_CALCULATION,
    ant,
    calculation 
  }
}

const calculate = (ant) => {

  console.log('CALCULATE ', ant)

  return new Promise((resolve) => {
    resolve(ant)
  })
}

const calculating = (state, ant) => {
  console.log('calculating ', ant, state)

  // causes infinite loop
  // if (state.ants.calculating) {
  //   console.log('calculating is true')
  //   return true
  // }

  if (ant.calculation > 0) {
    console.log('received ant calculation')
    return false
  }

  return false
}

const getCalculation = ant => dispatch => {
  dispatch(requestCalculation(ant))
  const generateCalculation = generateAntWinLikelihoodCalculator()

  console.log('GET CALCULATION ', ant)

  return generateCalculation((ant) => {
    calculate(ant)
      .then((calculation) => {
        console.log(ant, calculation)
        dispatch(receiveCalculation(ant, calculation))
      })
  })
}

export const runCalculation = ant => (dispatch, getState) =>  {
  console.log('RUN CALCULATION ', ant, getState())

  if (calculating(getState(), ant)) {
    return dispatch(getCalculation(ant))
  }
}
