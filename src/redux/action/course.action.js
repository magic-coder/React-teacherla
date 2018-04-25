import * as actionType from '../contants/course.contants'
import { API, URL } from '../contants/content';
import axios from 'axios';
import { errorMsg } from "./user.action";


function doCourse(data) {
    return { type: actionType.GETDOCOURSE, payload: data }
}


export function getDoCourse({ datetime, userid, token, teacherid}) {
    return dispatch => {
        axios.post(URL + API.COURSE.GETDOCOURSE, {
            token: token,
            userid: userid,
            datetime: datetime,
            teacherid: teacherid,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(doCourse(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
                dispatch(doCourse([]))
            }
        })
    }
}