const mongoose = require('mongoose')
//链接mongoDB
const DB_URL = 'mongodb://localhost:27017/XIT_Tla'
mongoose.connect(DB_URL)
mongoose.connection.on('connected'.function () {
  console.log('mongo connect sucess')
})

const models = {
  user:{
    'user':{'type':String,'require':true},
    'pwd':{'type':String,'require':true},
    'teacher_num':{'type':String,'require':true},
    //头像
    'avatar':{'type':String,'require':true},
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
  }
}
