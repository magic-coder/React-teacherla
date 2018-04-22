import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { loadData } from '../../redux/action/user.action'
import { getCookie } from '../../config/util'
import { API, URL } from '../../redux/contants/content';

@withRouter
@connect(
  state => state,
    { loadData }
)

class AuthRouter extends React.PureComponent {
  render() {
    return null
  }
  componentWillMount() {
    console.log(this.props)
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    const user_id = getCookie('user_id');
    const access_token = getCookie('token');
    if (publicList.indexOf(pathname) > -1) {
      return null
    }
    axios.post(URL+API.USER.USERINFO,
      {
        userid: user_id,
        token: access_token,
        teacherid: user_id,
      }
    ).then((res) => {
      if (res.status === 200 && res.data.code === 0) {
        this.props.loadData(res.data.data);
      }else{
        this.props.history.push('/login');
      }
    }).catch(function (err) {
      console.log(err);
    });
  }
}

export default AuthRouter
