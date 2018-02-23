import * as actionType from '../contants/user.contants'

const initState = {
  isAuth:'',
  msg:'',
  user:'',
  pwd:''
}

export default function user(state = initState,action) {
  switch (action.type) {
    case actionType.AUTH_SUCCESS:
      return {
        ...state, msg:'', isAuth:true, ...action.payload
      }
    case actionType.ERROR_MSG:
      return {
        ...state, msg:action.msg, isAuth:false
      }
    default:
      return state;
  }
}
