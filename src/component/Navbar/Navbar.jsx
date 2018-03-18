import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import{
Button,
Layout,
Icon,
Menu,
Dropdown,
Row,
Col
} from 'antd'
import Avatars from '../Avatars/Avatars'


@withRouter
class Navbar extends React.PureComponent {
  render(){
    const menu = (<Menu>
      <Menu.Item key="0">
        <Link to='/'>主页</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to='/classlist'>课程表</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/visitlist'>听课表</Link>
      </Menu.Item>
    </Menu>)
    const {Header} = Layout
    const goBackList = ['/classstatus']
    const pathname = this.props.location.pathname
    console.log(this.props);
    return (
      <Header style={{
          padding: '0px 20px'
        }}>
        <Row type="flex" justify="space-between">
        <Col>
        {
          goBackList.indexOf(pathname) > -1
          ?
          <Button
            type="primary"
            style={{
              marginBottom: 16
            }}
            onClick={this.props.history.goBack}
          >
            <Icon type="rollback" />
          </Button>
          :
          <Dropdown overlay={menu} trigger={['click']}>
            <Button type="primary" style={{
                marginBottom: 16
              }}>
              <Icon type="appstore" />
            </Button>
          </Dropdown>
        }
        </Col>
        <Link to='/own'><Avatars/></Link>
        </Row>
      </Header>
    )
  }
}

export default Navbar
