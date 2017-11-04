import React from 'react';
import Logo from '../../../component/logo/logo';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';

class M_Register extends React.Component{
    render(){
        return(
            <div>
                <Logo/>
                <List>
                    <InputItem>教师学号</InputItem>
                    <InputItem>验证码</InputItem>
                    <InputItem>密码</InputItem>
                    <InputItem>确认密码</InputItem>
                </List>
            </div>
        )
    }
}

export default M_Register