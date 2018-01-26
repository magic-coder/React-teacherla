import * as actionType from '../contants/userinfo.contants'

export function login() {
  return{
    (dispatch)=>{
      dispatch(
        authSucess()
      )
    }
  }
}

//成功
function authSucess(obj) {
  const {pwd,...data} = obj
  return {type: AUTH_SUCCESS, payload: data}
}

//错误信息
function errorMsg(msg) {
  return {msg, type: ERROR_MSG}
}
