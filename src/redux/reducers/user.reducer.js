import * as actionType from '../contants/user.contants'
import {getRedirectPath} from '../../config/util'
import moment from 'moment'

const initState = {
  dateToday: moment(new Date()).format('YYYY-MM-DD'),
  redirectTo:'',
  msg:'',
  user_id:'',
  teacher_name:'',
  teacher_type:'',
  department:'',
  user:'',
  avatar:'',
  token:'',
  teacherList:'',
}

export default function user(state = initState,action) {
  switch (action.type) {
    case actionType.AUTH_SUCCESS:
      return {
        ...state, msg:'',redirectTo:getRedirectPath(action.payload), ...action.payload
      }
    case actionType.LOAD_DATA:
      return {
        ...state, ...action.payload
      }
    case actionType.ERROR_MSG:
      return {
        ...state, msg:action.msg, isAuth:false
      }
    case actionType.TEACHER_LIST:
      return {
        ...state, teacherList: action.payload
      }
    default:
      return state; 
  }
}
