import * as actionType from '../contants/plan.contants';
import { API, URL } from '../contants/content';
import axios from 'axios';
import { errorMsg } from "./user.action";

function planList(data) {
    return {type:actionType.GETPLAN, payload:data}
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