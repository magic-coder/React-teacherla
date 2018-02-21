const express = require('express')
const userRouter = require('./user')

//express
const app = express()

//操作
app.use('/user',userRouter)

app.listen(9093,function () {
  console.log('server start at 9093');
})
