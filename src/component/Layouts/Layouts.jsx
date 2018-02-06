import React from 'react'
import {Layout} from 'antd'
import Navbar from '../Navbar/Navbar'
import './layout.css'

class Layouts extends React.PureComponent {
  render() {
    const {Content} = Layout
    return (
      <Layout className='fullpage'>
        <Navbar/>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}

export default Layouts
