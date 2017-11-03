import { generateAntWinLikelihoodCalculator } from '../utils/generateAntWinLikelihoodCalculator'
import ant01 from '../images/ant01.jpg'
import ant02 from '../images/ant02.jpg'
import ant03 from '../images/ant03.jpg'
import ant04 from '../images/ant04.jpg'
import ant05 from '../images/ant05.jpg'

export const FETCH_ANTS = 'FETCH_ANTS'
export const CALCULATE_ANTS = 'CALCULATE_ANTS'
export const GET_CALCULATION = 'GET_CALCULATION'
export const SET_CALCULATION = 'SET_CALCULATION'

export function fetchAnts(ants) {
  // @TODO: fetch images from cdn
  const images = [ ant01, ant02, ant03, ant04, ant05 ]

  const updatedAnts = ants.map((ant, index) => {
    return {
      ...ant,
      image: images[index],
      calculating: false,
      calculation: null
    }
  })

  return {
    type: FETCH_ANTS,
    payload: updatedAnts
  };
}

export function calculateAnts(ants) {
  console.log('calculating ants')

  const updatedAnts = ants.map(ant => {
    return Object.assign({}, ant, { calculating: true })
  })

  return {
    type: CALCULATE_ANTS,
    payload: updatedAnts
  };
}

const calculation = (calculation) => {

  console.log('promise calculation')

  return new Promise((resolve) => {
    resolve(calculation)
  })
}

export function getCalculation(ant) {
  console.log('getting calculation for: ', ant)

  // @TODO: move outside of getCalculation
  const generateCalculation = generateAntWinLikelihoodCalculator()
  let generatedCalculation = generateCalculation((callback) => {
    calculation(callback).then(function(response){
      console.log(response)
      return response
    })
  })

  console.log(generatedCalculation)

  const calculatedAnt = Object.assign({}, ant, {
    calculating: false,
    calculation: 10
  })

  return {
    type: GET_CALCULATION,
    payload: calculatedAnt
  }
}

export function setCalculation(ants, calculatedAnt) {
  console.log('setting calculation for: ', calculatedAnt)
  console.log(ants)

  const calculatedAnts = ants.map(ant => {
    if (ant.name === calculatedAnt.name) {
      return Object.assign({}, ant, {
        calculating: false,
        calculation: calculatedAnt.calculation
      })
    }
    return ant
  })
  console.log(calculatedAnts)

  return {
    type: SET_CALCULATION,
    payload: calculatedAnts
  }
}
