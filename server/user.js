const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const Check = model.getModel('check')

//用户列表
Router.get('/list', function(req, res) {
  //User.remove({}, function(e,d) {})
  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})

//生成验证码
// Router.get('/addinvitnum',function (req,res) {
//   const {user,invitnum} = {
//     user:'1403102043',
//     invitnum:'234567'
//   }
//   Check.create({user,invitnum},function (err,doc) {
//     if(err){
//       return res.json({code:1,msg:'后端出错'});
//     }
//     return res.json({code:0})
//   })
// })

//验证信息列表
Router.get('/invitnum', function(req, res) {
  Check.find({}, function(err, doc) {
    return res.json(doc)
  })
})

//注册
Router.post('/register', function(req, res) {
  console.log(req.body)
  const {user, password, invitnum} = req.body
  User.findOne({user: user}, function(err, doc) {
    if (doc) {
      return res.json({code: 1, msg: '用户已经注册'})
    } else {
      Check.findOne({user: user,invitnum: invitnum}, function(err, doc) {
        if (doc) {
          return res.json({code: 1, msg: '邀请码错误'})
        } else {
          User.create({user,password}, function(err, doc) {
            if (err) {
              return res.json({code: 1, msg: '后端出错了'})
            }
            return res.json({code: 0})
          })
        }
      })
  }})
})

//用户信息
Router.get('/info', function(req, res) {
  return res.json({code: 1})
})

module.exports = Router
