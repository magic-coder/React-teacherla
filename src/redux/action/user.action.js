import * as actionType from '../contants/user.contants'
import { API, URL} from '../contants/content'
import axios from 'axios'
import { setCookie } from '../../config/util'
import { message } from 'antd'

function authSucess(data) {
  return {type:actionType.AUTH_SUCCESS, payload:data}
}

export function errorMsg(msg) {
  message.error(msg);
  return {type:actionType.ERROR_MSG, msg}
}

export function loadData(userinfo) {
  return {type:actionType.LOAD_DATA,payload:userinfo}
}

function teacherList(teacherList) {
  return { type: actionType.TEACHER_LIST, payload: teacherList }
}

export function login({ user, password }) {
  return dispatch => {
    axios.post(URL+API.USER.LOGIN,
      {
        mobile:user,
        pwd:password,
      }
    ).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        const { user_id, token } = res.data.data;
        setCookie('user_id', user_id);
        setCookie('token', token);
        dispatch(authSucess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function teachList({ userid, token }) {
  return dispatch => {
    axios.post(URL + API.USER.TECHLIST,{
      userid: userid,
      token: token,
    }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(teacherList(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function getTeacherList({ userid, token, attendid }) {
  return dispatch => {
    axios.post(URL + API.USER.GETLSTECH,{
      userid: userid,
      token: token,
      attendid: attendid,
    }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(teacherList(res.data.data))
      } else {
        dispatch(teacherList(''))
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
