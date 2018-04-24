import { combineReducers } from 'redux';
import user from './user.reducer';
import task from './task.reducer';
import plan from './plan.reducer';
import course from './course.reducer';

export default combineReducers({ user, task, plan, course })
