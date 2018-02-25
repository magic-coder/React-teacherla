import * as actionType from '../contants/user.contants'
import axios from 'axios'

function authSucess(data) {
  return {type:actionType.AUTH_SUCCESS, payload:data}
}

function errorMsg(msg) {
  return {type:actionType.ERROR_MSG, msg}
}

export function register({userName, password, invitnum}) {
  return dispatch => {
    axios.post('/user/login', {userName, password, invitnum}).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSucess({userName, password, invitnum}))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
