const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

//express
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())

//操作
app.use('/user',userRouter)

app.listen(9093,function () {
  console.log('server start at 9093');
})
