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

class Registers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      invitnum: ''
    }
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
    const {getFieldDecorator} = this.props.form
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
                })(<Input prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="输入账号"/>)
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
                })(<Input prefix={<Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>} type="password" placeholder="输入密码"/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('repeatpwd', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码!'
                    }
                  ]
                })(<Input prefix={<Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>} type="password" placeholder="再次输入密码"/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('invitnum', {
                  rules: [
                    {
                      required: true,
                      message: '请输入邀请码!'
                    }
                  ]
                })(<Input prefix={<Icon type="barcode" style = {{ color: 'rgba(0,0,0,.25)' }}/>} type="number" placeholder="邀请码"/>)
              }
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" style={{
                  width: '100%'
                }}>注册</Button>
            </FormItem>
            <FormItem>
              <Link to='/login'>跳转登录</Link>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </div>);
  }
}

const Register = Form.create()(Registers);

export default Register
