import React from 'react'
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Row,
  Col
} from 'antd'
import Logo from '../../component/Logo/logo'
const FormItem = Form.Item;

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    return (<div>
      <Logo/>
      <Row>
        <Col span={17} offset={3}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              <Input prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="用户"/>
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>} type="password" placeholder="密码"/>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" style={{width:'100%'}}>登录</Button>
            </FormItem>
            <FormItem>
              <a href='https://www.baidu.com'>跳转注册</a>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </div>);
  }
}

export default Login
