import * as actionType from '../contants/userinfo.contants'
import axios from 'axios'

function registerSuccess(data) {
  return {type:actionType.AUTH_SUCCESS, payload:data}
}

function errorMsg(msg) {
  return {type:actionType.ERROR_MSG, msg}
}

export function register({userName, password, invitnum}) {
  return dispatch => {
    axios.post('/user/register',{userName, password, invitnum})
    .then(res=>{
      if (res.status === 200 && res.data.code === 0) {
        dispatch(registerSuccess({userName, password, invitnum}))
      } else {
        dispatch()
      }
    })
  }
}
