export const URL = 'http://120.78.86.5/api'
export const API = {
    USER: {
        LOGIN: '/user/login',
        TECHLIST: '/user/gettchlist',
        USERINFO: '/user/getinfo',
    },
    TASK: {
        GETTASK: '/listentask/getTask',
        ADDTASK: '/listentask/addtask',
        DELETETASK: '/listentask/deletetask',
    },
    PLAN: {
        GETPLAN: '/listenplan/getplan',
        DELETETPALN: '/listenplan/deleteplan',
        ADDPLANFROMC: '/listenplan/ddplanbycrs',
        ADDPLANFROMT: '/listenplan/teacher'
    },
    COURSE: {
        GETDOCOURSE: '/attendcourse/getatdcourse',
        GETCOURSEDETAIL: '/attendcourse/getcoursedetail',
        GETLECOURSE: '/attendcourse/getcancourse',
    }
}

export const IMAGES = 'http://120.78.86.5/images' 
