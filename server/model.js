const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/teacher-Sys';
mongoose.connect(DB_URL);

const models = {
    user:{
        'user':{type:String, require:true},
        'pwd':{type:String, require:true},
        //头像
        'avatar':{type:String, defaultValue:'http://www.jianbihua.cc/uploads/allimg/141105/15-14110509413J44-lp.jpg'},
        //简介
        'desc':{type:String},
        //
    }
};