import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadData} from '../../redux/action/user.action'
import { message } from 'antd'

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
    axios.get(`http://120.78.86.5/api/v1/user/info/1`).then((res,req) => {
      console.log(res,req);
      if (res.status === 200) {
        this.props.loadData(res.data);
      }else{
        this.props.history.push('/login');
      }
    }).catch(function (err) {
      console.log(err);
    });
  }
}

export default AuthRouter
