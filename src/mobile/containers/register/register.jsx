import React from 'react';
import Logo from '../../../component/logo/logo';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';

class M_Register extends React.Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    login(){
        console.log(this.props);
        this.props.history.push('/m_login');
    }
    render(){
        return(
            <div>
                <WingBlank>
                    <h2 style={{'textAlign':'center'}}>
                        <div className='anticon icon-solution1' style={{color:'#108ee9',fontSize:'30px'}}> 教师听课系统</div>
                    </h2>
                    <Logo/>
                </WingBlank>
                <List>
                    <InputItem>
                        <div className='anticon icon-solution1' style={{color:'#108ee9',fontSize:'16px'}}> 教师学号</div>
                    </InputItem>
                    <InputItem>
                        <div className='anticon icon-appstore-o' style={{color:'#108ee9',fontSize:'16px'}}> 验证码</div>
                    </InputItem>
                    <InputItem>
                        <div className='anticon icon-Safety' style={{color:'#108ee9',fontSize:'16px'}}> 输入密码</div>
                    </InputItem>
                    <InputItem>
                        <div className='anticon icon-Safety' style={{color:'#108ee9',fontSize:'16px'}}> 确认密码</div>
                    </InputItem>
                </List>
                <WingBlank>
                    <WhiteSpace size={`lg`}/>
                    <Button type={`primary`}><div className='anticon icon-adduser' style={{color:'#ffffff',fontSize:'20px'}}> ️注册</div></Button>
                    <WhiteSpace/>
                    <Button onClick={this.login} type={`primary`}><div className='anticon icon-rollback' style={{color:'#ffffff',fontSize:'20px'}}> ️跳转登录</div></Button>
                </WingBlank>
            </div>
        )
    }
}

export default M_Register