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
import {connect} from 'react-redux'
import {register} from '../../redux/action/user.action'
import Logo from '../../component/Logo/logo'
const FormItem = Form.Item;

@connect(state => state.user, {register})
class Registers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      repeatpwd: '',
      invitnum: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkPassword = this.checkPassword.bind(this)
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入密码不同!');
    } else {
      callback();
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        this.props.register(values)
      }
    })
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
                    }, {
                      validator: this.checkPassword
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
                })(<Input prefix={<Icon type = "barcode" style = {{ color: 'rgba(0,0,0,.25)' }}/>} type="number" placeholder="邀请码"/>)
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
