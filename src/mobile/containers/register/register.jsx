import React from 'react';
import Logo from '../../../component/logo/logo';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import {connect} from 'react-redux'
import {register} from "../../../redux/user.redux";

@connect(
    state=>state.user,
    {register}
)

class M_Register extends React.Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.state ={
            user:'',
            user_code:'',
            pwd:'',
            repeat_pwd:'',
        };
        this.handleRegister = this.handleRegister.bind(this);
    }
    login(){
        console.log(this.props);
        this.props.history.push('/login');
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        this.props.register(this.state)
    }
    render(){
        return(
            <div>
                <WingBlank>
                    <Logo/>
                    <div className='anticon icon-team' style={{color:'#108ee9',fontSize:'34px','textAlign':'center'}}> 教师听课系统 </div>
                    <WhiteSpace size={`lg`}/>
                </WingBlank>
                <List>
                    <InputItem onChange={v=>this.handleChange('user',v)}>
                        <div className='anticon icon-solution1' style={{color:'#108ee9',fontSize:'16px'}}> 教师学号</div>
                    </InputItem>
                    <InputItem type='number' onChange={v=>this.handleChange('user_code',v)}>
                        <div className='anticon icon-appstore-o' style={{color:'#108ee9',fontSize:'16px'}}> 验证码</div>
                    </InputItem>
                    <InputItem name='password' type='password' onChange={v=>this.handleChange('pwd',v)}>
                        <div className='anticon icon-Safety' style={{color:'#108ee9',fontSize:'16px'}}> 密 码</div>
                    </InputItem>
                    <InputItem type='password' onChange={v=>this.handleChange('repeat_pwd',v)}>
                        <div className='anticon icon-Safety' style={{color:'#108ee9',fontSize:'16px'}}> 确认密码</div>
                    </InputItem>
                </List>
                {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:<p> </p>}
                <WingBlank>
                    <WhiteSpace size={`lg`}/>
                    <Button onClick={this.handleRegister} type={`primary`}>
                        <div className='anticon icon-adduser' style={{color:'#ffffff',fontSize:'20px'}}> ️注册</div>
                    </Button>
                    <WhiteSpace/>
                    <Button onClick={this.login} type={`primary`}>
                        <div className='anticon icon-rollback' style={{color:'#ffffff',fontSize:'20px'}}> ️跳转登录</div>
                    </Button>
                </WingBlank>
            </div>
        )
    }
}

export default M_Register