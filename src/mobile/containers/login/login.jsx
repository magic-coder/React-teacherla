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
                <Logo/>
                <List>
                    <InputItem>
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem>密码</InputItem>
                </List>
                <WingBlank>
                    <WhiteSpace size={`lg`}/>
                    <Button type={`primary`}>登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type={`primary`}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default M_Login