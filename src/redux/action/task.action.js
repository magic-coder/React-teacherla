import * as actionType from '../contants/task.contants';
import { API, URL } from '../contants/content';
import axios from 'axios';
import { errorMsg } from "./user.action";

function taskList(data) {
    return {type:actionType.GETTASK, payload:data}
}

export function getTask({ userid, token }) {
    return dispatch => {
        axios.post(URL + API.TASK.GETTASK, {
            token:token,
            userid:userid,
            teacherid:userid,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(taskList(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function deleteTask({ userid, token, taskid }) {
    return dispatch => {
        axios.post(URL + API.TASK.DELETETASK, {
            token: token,
            userid: userid,
            taskid: taskid,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                window.location.reload();
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function addTask({ userid, token, teacherid }) {
    return dispatch => {
        axios.post(URL + API.TASK.ADDTASK, {
            token: token,
            userid: userid,
            teacherid: teacherid,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                window.location.reload();
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
