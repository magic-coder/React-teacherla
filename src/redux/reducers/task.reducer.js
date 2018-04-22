import * as actionType from '../contants/task.contants';

const initState = {
  teacher:'',
  num:'',
  task:[],
}

export default function task(state = initState, action) {
  switch (action.type) {
    case actionType.GETTASK:
      return {
        ...state, ...action.payload
      }
    default:
      return state;
  }
}