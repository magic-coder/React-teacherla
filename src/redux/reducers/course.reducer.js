import * as actionType from '../contants/course.contants'

const initState = {
    doCourse: [],
    lsCourse: [],
    choseplan: [],
    courseDetail:{},
}

export default function plan(state = initState, action) {
    switch (action.type) {
        case actionType.GETDOCOURSE:
            return {
                ...state, doCourse : action.payload
            }
        case actionType.GETCOURSEDETAIL:
            return {
                ...state, courseDetail : action.payload
            }
        case actionType.GETLECOURSE:
            return {
                ...state, lsCourse : action.payload
            }
        default:
            return state;
    }
}