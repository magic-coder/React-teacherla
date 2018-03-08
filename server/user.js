const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const Check = model.getModel('check')

//用户列表
Router.get('/list',function (req,res) {
  User.find({},function (err,doc) {
    return res.json(doc)
  })
})

//生成验证码
Router.post('/addinvitnum',function (req,res) {
  const {user,invitnum} = {
    user:'1403102048',
    'invitnum':'202083'
  }
  Check.create({user,invitnum},function (err,doc) {
    console.log(doc);
  })
})

//验证信息列表
Router.get('/invitnum',function (req,res) {
  Check.find({},function (err,doc) {
    return res.json(doc)
  })
})

//注册
Router.post('/register',function (req,res) {
  console.log(req.body)
  const {user, password, invitnum} = req.body
  Check.findOne({user:user,invitnum:invitenum},function (err,doc) {
    if (doc) {
      User.findOne({user:user},function (err,doc) {
        User.create({user, password},function (e,d) {
          if (e) {
            return res.json({code:1,msg:'后端出错了'})
          }
          return res.json({code:0})
        })
      })
    }else {
      return res.json({code:1,msg:'邀请码错误'})
    }
  })
})

//
Router.get('/info',function (req, res) {
  return res.json({code:0})
})

module.exports = Router
