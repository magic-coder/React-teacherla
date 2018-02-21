import * as actionType from '../contants/user.contants'

const initState = {
  user:'',
  msg:''
}

export default function userinfo(state = initState,action) {
  switch (action.type) {
    case actionType.AUTH_SUCCESS:
      return {
        ...state
      }
    case actionType.LOGIN_OUT:
      return {
        ...initState,redirectTo:'/login'
      }
    default:
      return state;
  }
}
