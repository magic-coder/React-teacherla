import React from 'react'
import {Link} from 'react-router-dom'
import{
Button,
Layout,
Icon,
Menu,
Dropdown
} from 'antd'
import Avatars from '../Avatars/Avatars'

class Navbar extends React.PureComponent {
  render(){
    const menu = (<Menu>
      <Menu.Item key="0">
        <Link to='/'>主页</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to='/classlist'>听课表</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/visitlist'>课程表</Link>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item key="3">
        <Link to='/own'>个人中心</Link>
      </Menu.Item>
    </Menu>)
    const {Header} = Layout
    return (
      <Header style={{
          padding: '0px 20px'
        }}>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button type="primary" style={{
              marginBottom: 16
            }}>
            <Icon type="appstore" />
          </Button>
        </Dropdown>
        <Avatars/>
      </Header>
    )
  }
}

export default Navbar
