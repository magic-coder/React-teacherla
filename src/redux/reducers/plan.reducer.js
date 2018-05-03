import * as actionType from '../contants/plan.contants'

const initState = {
  num: '',
  plan: [],
  msg: '',
}

export default function plan(state = initState, action) {
  switch (action.type) {
    case actionType.GETPLAN:
      return {
        ...state, ...action.payload
      }
    case actionType.SUCCESSINFO:
      return {
        ...state, msg:action.payload
      }
    default:
      return state;
  }
}
