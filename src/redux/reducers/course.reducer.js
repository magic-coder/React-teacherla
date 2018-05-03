import * as actionType from '../contants/course.contants'

const initState = {
    endTime: {
      '1-2':'10:00',
      '3-4':'12:00',
      '5-6':'16:00',
      '7-8':'17:50',
    },
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
