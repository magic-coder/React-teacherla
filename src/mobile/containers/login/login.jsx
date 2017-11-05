import React from 'react'
import Logo from '../../../component/logo/logo'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';

class M_Login extends React.Component{
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
    }
    register(){
        console.log(this.props);
        this.props.history.push('/register');
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
                    <InputItem>
                        <div className='anticon icon-user' style={{color:'#108ee9',fontSize:'16px'}}> 账号</div>
                    </InputItem>
                    <InputItem>
                        <div className='anticon icon-Safety' style={{color:'#108ee9',fontSize:'16px'}}> 密码</div>
                    </InputItem>
                </List>
                <WingBlank>
                    <WhiteSpace size={`lg`}/>
                    <Button type={`primary`}><div className='anticon icon-login' style={{color:'#ffffff',fontSize:'20px'}}> 登录</div></Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type={`primary`}><div className='anticon icon-rollback' style={{color:'#ffffff',fontSize:'20px'}}> 跳转注册</div></Button>
                </WingBlank>
            </div>
        )
    }
}

export default M_Login