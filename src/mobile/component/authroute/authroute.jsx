import React from 'react'
import axios from  'axios'

class M_AuthRoute extends React.Component{
    componentDidMount(){
        //获取用户信息
        axios.get('/user/info').then(res=>{
            if(res.status==200){
                console.log(res.data)
            }
        })
        //是否登录
        //现在的url地址 login是不需要跳转
        //用户是否完善信息（选择头像、个人简介）
    }
    render(){
        return(null)
    }
}

export default M_AuthRoute