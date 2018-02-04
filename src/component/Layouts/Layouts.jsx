import React from 'react'
import {Button, Layout, Icon, Calendar} from 'antd'
import './layout.css'

class Layouts extends React.PureComponent {
  render() {
    const {Header, Footer, Content} = Layout
    return (<Layout className="fullpage">
      <Header style={{
          padding: '0px 20px'
        }}>
        <Button type="primary" style={{
            marginBottom: 16
          }}>
          <Icon type="menu-unfold"/>
        </Button>
      </Header>
      <Content style={{
          padding: 24,
          background: '#fff'
        }}>
        <Calendar/>
      </Content>
    </Layout>)
  }
}

export default Layouts
