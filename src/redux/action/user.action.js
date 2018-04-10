import * as actionType from '../contants/user.contants'
import axios from 'axios'

function authSucess(data) {
  return {type:actionType.AUTH_SUCCESS, payload:data}
}

function errorMsg(msg) {
  return {type:actionType.ERROR_MSG, msg}
}

// export function register({user, password, invitnum}) {
//   return dispatch => {
//     axios.post('/user/register', {user, password, invitnum}).then(res => {
//       if (res.status === 200 && res.data.code === 0) {
//         dispatch(authSucess({user, password, invitnum}))
//       } else {
//         dispatch(errorMsg(res.data.msg))
//       }
//     })
//   }
// }

export function loadData(userinfo) {
  return {type:actionType.LOAD_DATA,payload:userinfo}
}

export function login({user,password}) {
  return dispatch => {
    axios.get(`http://xmgxy.cn/api/v1/token/${user}`,{params: { 'pwd': 'password' }}).then(res => {
      if ( res.status===200 && res!== '') {
        dispatch(authSucess(res))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
