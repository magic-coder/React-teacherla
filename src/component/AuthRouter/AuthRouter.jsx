import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { loadData, teachList } from '../../redux/action/user.action'
import { getCookie } from '../../config/util'

@withRouter
@connect(
  state => state.user,
    { loadData, teachList }
)

class AuthRouter extends React.PureComponent {
  render() {
    return null
  }
  componentDidMount() {
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    const user_id = getCookie('user_id');
    const access_token = getCookie('token');
    if (publicList.indexOf(pathname) > -1) {
      return null
    }
    axios.post(`http://120.78.86.5/api/user/getinfo`,
      {
        userid: user_id,
        token: access_token,
        teacherid: user_id,
      }
    ).then((res) => {
      if (res.status === 200 && res.data.code === 0) {
        this.props.loadData(res.data.data);
        this.props.teachList({
          userid: res.data.data.user_id,
          token: getCookie('token'),
        })
      }else{
        this.props.history.push('/login');
      }
    }).catch(function (err) {
      console.log(err);
    });
  }
}

export default AuthRouter
