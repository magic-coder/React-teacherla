import * as actionType from '../contants/plan.contants';
import { API, URL } from '../contants/content';
import axios from 'axios';
import { errorMsg } from "./user.action";
import { message } from 'antd'

function planList(data) {
    return {type:actionType.GETPLAN, payload:data}
}

function successInfo(msg) {
    message.info(msg,5);
    return {type:actionType.SUCCESSINFO, payload:msg}
}

export function getPlan({ userid, token }) {
    return dispatch => {
        axios.post(URL + API.PLAN.GETPLAN, {
            token: token,
            userid: userid,
            teacherid: userid,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(planList(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function addPlanFromC({ userid, token, attendid, teacherid }) {
    return dispatch => {
        axios.post(URL + API.PLAN.ADDPLANFROMC, {
            token: token,
            userid: userid,
            teacherid: teacherid,
            attendid: attendid,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(successInfo(res.data.msg))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function deletePlan({ userid, token, planid }) {
    return dispatch => {
        axios.post(URL + API.PLAN.DELETETPALN, {
            token: token,
            userid: userid,
            planid: planid,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                window.location.reload();
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function addPlanFromT({ userid, token, attendid, teacherid, taskid }) {
    return dispatch => {
        axios.post(URL + API.PLAN.ADDPLANFROMT, {
            token: token,
            userid: userid,
            teacherid: teacherid,
            attendid: attendid,
            taskid: taskid,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                window.history.back();
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
