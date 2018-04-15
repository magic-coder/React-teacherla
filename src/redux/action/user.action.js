import * as actionType from '../contants/user.contants'
import axios from 'axios'
import { setCookie } from '../../config/util'

function authSucess(data) {
  return {type:actionType.AUTH_SUCCESS, payload:data}
}

function errorMsg(msg) {
  return {type:actionType.ERROR_MSG, msg}
}

export function loadData(userinfo) {
  return {type:actionType.LOAD_DATA,payload:userinfo}
}

export function login({user,password}) {
  return dispatch => {
    axios.post(`http://120.78.86.5/api/user/login?`,
      {
        mobile:user,
        pwd:password,
      }
    ).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        const { userid, token } = res.data.data;
        setCookie('userid', userid);
        setCookie('token', token);
        console.log(res);
        dispatch(authSucess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
