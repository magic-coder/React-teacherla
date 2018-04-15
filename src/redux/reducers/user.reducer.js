import * as actionType from '../contants/user.contants'
import {getRedirectPath} from '../../config/util'

const initState = {
  redirectTo:'',
  isAuth:'',
  msg:'',
  userid:'',
  name:'',
  department:'',
  user:'',
  avatar:'',
  token:'',
}

export default function user(state = initState,action) {
  switch (action.type) {
    case actionType.AUTH_SUCCESS:
      return {
        ...state, msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true, ...action.payload
      }
    case actionType.LOAD_DATA:
      return {
        ...state, ...action.payload
      }
    case actionType.ERROR_MSG:
      return {
        ...state, msg:action.msg, isAuth:false
      }
    default:
      return state;
  }
}
