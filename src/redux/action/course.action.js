import * as actionType from '../contants/course.contants'
import { API, URL } from '../contants/content';
import axios from 'axios';
import { errorMsg } from "./user.action";

function doCourse(data) {
    return { type: actionType.GETDOCOURSE, payload: data }
}

export function makemark({
  token,
  userid,
  planid,
  chapter,
  requirenum,
  actualnum,
  numoflate,
  numofearly,
  lessoncontent,
  remarkoflesson,
  suggestion,
  date,
  classname,
  section,
  place,
  coursename,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  ttotal,
  s1,
  s2,
  s3,
  stotal,
}) {
    return dispatch => {
        axios.post(URL + API.MARK.ADDLESSON, {
          token,
          userid,
          planid,
          chapter,
          requirenum,
          actualnum,
          numoflate,
          numofearly,
          lessoncontent,
          remarkoflesson,
          suggestion,
          date,
          section,
          place,
          coursename,
        }).then((res)=>{
          if (res.data.code === 0) {
              axios.post(URL + API.MARK.ADDQREMARK, {
                token,
                userid,
                planid,
                t1,
                t2,
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t9,
                t10,
                ttotal,
                s1,
                s2,
                s3,
                stotal,
                date,
                classname,
              }).then((res)=> {
                  if (res.data.code === 0) {
                      window.history.back();
                  } else {
                      dispatch(errorMsg(res.data.msg))
                  }
              })
          } else {
              dispatch(errorMsg(res.data.msg))
          }
        })
    }
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

function leCourse(data) {
    return { type: actionType.GETLECOURSE, payload: data }
}

export function getLECourse({ datetime, userid, token }) {
    return dispatch => {
        axios.post(URL + API.COURSE.GETLECOURSE, {
            token: token,
            userid: userid,
            datetime: datetime,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(leCourse(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
                dispatch(leCourse([]))
            }
        })
    }
}

function getCourse(data) {
    return { type: actionType.GETCOURSEDETAIL, payload: data }
}

export function getCourseDetail({ courseid, userid, token }) {
    return dispatch => {
        axios.post(URL + API.COURSE.GETCOURSEDETAIL, {
            token: token,
            userid: userid,
            courseid: courseid,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(getCourse(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
                dispatch(getCourse({}))
            }
        })
    }
}
