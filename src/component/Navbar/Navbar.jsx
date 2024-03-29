import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import{
Button,
Layout,
Icon,
Menu,
Dropdown,
Row,
Col,
Avatar
} from 'antd'
import {connect} from 'react-redux'


@withRouter
@connect(state=>state.user,)
class Navbar extends React.PureComponent {
  render(){
    const menu = (<Menu>
      <Menu.Item key="0">
        <Link to='/'>主  页</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to='/classlist'>课程表</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/visitlist'>听课表</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to='/classmustlist'>任务表</Link>
      </Menu.Item>
    </Menu>)
    const {Header} = Layout
    const goBackList = ['/classstatus/', '/classstep/','/choseplan/']
    const pathname = this.props.location.pathname
    return (
      <Header style={{
          padding: '0px 20px'
        }}>
        <Row type="flex" justify="space-between">
        <Col>
        {
          goBackList.some((element)=>{
            return pathname.indexOf(element) !== -1 ? true : false
          })
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
          <Link to='/own'><Avatar shape="square" src={this.props.avatar}/></Link>
        </Row>
      </Header>
    )
  }
}

export default Navbar
