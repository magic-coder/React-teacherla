import React from 'react'
import {Link} from 'react-router-dom'
import{
Button,
Layout,
Icon,
Menu,
Dropdown
} from 'antd'

class Navbar extends React.PureComponent {
  render(){
    const menu = (<Menu>
      <Menu.Item key="0">
        <Link to='/'>主页</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to='/layouts'>听课表</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/layouts'>课程表</Link>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item key="3">教师系统</Menu.Item>
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
            <Icon type="menu-unfold"/>
          </Button>
        </Dropdown>
      </Header>
    )
  }
}

export default Navbar
