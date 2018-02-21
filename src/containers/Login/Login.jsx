import React from 'react'
import {
  Form,
  Icon,
  Input,
  Button,
  Row,
  Col
} from 'antd'
import {Link} from 'react-router-dom'
import Logo from '../../component/Logo/logo'
const FormItem = Form.Item;

class Logins extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    return (<div>
      <Logo/>
      <Row>
        <Col span={17} offset={3}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {
                getFieldDecorator('userName', {
                  rules: [
                    {
                      required: true,
                      message: '请输入账号!'
                    }
                  ]
                })(<Input prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="账号"/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码!'
                    }
                  ]
                })(<Input prefix={<Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>} type="password" placeholder="密码"/>)
              }
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" style={{
                  width: '100%'
                }}>登录</Button>
            </FormItem>
            <FormItem>
              <Link to='/register'>跳转注册</Link>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </div>);
  }
}

const Login = Form.create()(Logins);

export default Login
