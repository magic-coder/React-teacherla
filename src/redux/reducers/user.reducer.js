import * as actionType from '../contants/user.contants'

const initialState = {
  user:'',
  msg:'',
}

export default function userinfo(state = initialState,action) {
  switch (expression) {
    case actionType.AUTH_SUCCESS:
      return {
        ...state
      }
    case actionType.LOG_OUT:
      return {
        ...initState,redirectTo:'/login'
      }
    default:
      return state;
  }
}
