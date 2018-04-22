import * as actionType from '../contants/plan.contants'

const initState = {
  num: '',
  plan: [],
}

export default function plan(state = initState, action) {
  switch (action.type) {
    case actionType.GETPLAN:
      return {
        ...state, ...action.payload
      }
    default:
      return state;
  }
}