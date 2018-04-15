import React from 'react'
import {
  Form,
  Icon,
  Input,
  Button,
  Row,
  Col
} from 'antd'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/action/user.action'
import Logo from '../../component/Logo/logo'
const FormItem = Form.Item;

@connect(state => state.user, {login})
class Logins extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values)
      }
    });
  }
  render() {
    const {getFieldDecorator} = this.props.form
    return (<div>
      {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
      <Logo/>
      <Row>
        <Col span={17} offset={3}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {
                getFieldDecorator('user', {
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
          </Form>
        </Col>
      </Row>
    </div>);
  }
}

const Login = Form.create()(Logins);

export default Login
