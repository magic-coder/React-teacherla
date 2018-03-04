const mongoose = require('mongoose')
//链接mongoDB
const DB_URL = 'mongodb://localhost:27017/XIT_Tla'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
  console.log('mongodb connect sucess')
})

const models = {
  user:{
    'user':{'type':String,'require':true},
    'password':{'type':String,'require':true},
    'teacher_name':{'type':String},
    //头像
    'avatar':{'type':String},
    //简介
    'desc':{'type':String},
    //职称
    'title':{'type':String}
  },
  course:{
    'classteacher':{'type':String,'require':true},
    'department':{'type':String,'require':true},
    'classname':{'type':String,'require':true},
    'section':{'type':String,'require':true},
    'datatime':{'type':Number,'require':true},
    'classroom':{'type':String,'require':true},
    'people_state':{'type':Array,'require':true}
  },
  course_score:{
    'classteacher':{'type':String,'require':true},
    'class_id':{'type':String,'require':true},
    'c_content':{'type':String,'require':true},
    'c_evaluation':{'type':String,'require':true},
    'c_opinion':{'type':String,'require':true},
    'c_teacher_score':{'type':Array,'require':true},
    'c_student_score':{'type':Array,'require':true}
  },
  check:{
    'user':{'type':String,'require':true},
    'invitnum':{'type':String,'require':true}
  }
}
