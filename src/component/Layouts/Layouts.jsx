import React from 'react'
import { Layout, Icon } from 'antd'
import './layout.css'

class Layouts extends React.PureComponent {
  render(){
    const { Header, Footer, Content } = Layout
    return(
      <Layout className="fullpage">
        <Header></Header>
        <Content>Content</Content>
        <Footer style={{ textAlign: 'center' }}>
           <Icon type="copyright" /> Using ant-design <Icon type="ant-design" style={{ fontSize: 16, color: '#08c' }} />
        </Footer>
      </Layout>
    )
  }
}

export default Layouts
