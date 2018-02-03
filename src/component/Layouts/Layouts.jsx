import React from 'react'
import { Layout } from 'antd'
import './layout.css'

class Layouts extends React.PureComponent {
  render(){
    const { Header, Footer, Content } = Layout
    return(
      <Layout className="fullpage">
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    )
  }
}

export default Layouts
