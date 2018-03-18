import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadData} from '../../redux/action/user.action'

@withRouter
@connect(
  null,
  {loadData}
)

class AuthRouter extends React.PureComponent {
  render() {
    return null
  }
  componentDidMount() {
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (publicList.indexOf(pathname) > -1) {
      return null
    }
    axios.get('/user/info').then(res => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          this.props.loadData(res.data.data)
        } else {
          this.props.history.push('/login')
        }
      }
    })
  }
}

export default AuthRouter
