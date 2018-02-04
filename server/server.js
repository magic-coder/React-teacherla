const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookieParser')

//express
const app = express()

//操作
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
server.listen(9093,function () {
  console.log('server start at 9093');
})
