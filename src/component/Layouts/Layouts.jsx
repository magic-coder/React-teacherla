import React from 'react'
import { Layout, Alert } from 'antd'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './layout.css'

@withRouter
@connect(state=>state.user,)
class Layouts extends React.PureComponent {
  render() {
    const {Content} = Layout
    return (
      <Layout className='fullpage'>
        <Navbar/>
        <Alert showIcon={false} message="欢迎使用教师听课小助手" type="info" banner closable />
        <Content className='content'>
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}

export default Layouts
