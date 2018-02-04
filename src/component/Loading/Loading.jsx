import React from 'react'
import axios from 'axios'
import {Spin} from 'antd'
import './loading.css'

class Loading extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
    this.interceptors = this.interceptors.bind(this)
  }
  interceptors() {
    if (axios.interceptors.request.use(function() {
      return true
    }) || this.state.loading === true) {
      console.log('拦截响应')
      this.setState({loading: false})
    } else if (axios.interceptors.response.use(function() {
      return true
    }) || this.state.loading === false) {
      console.log('拦截请求')
      this.setState({loading: true})
    }
  }
  render() {
    console.log(this.state)
    return (<div>
      <Spin className='loading' spinning={this.state.loading} tip={this.props.tip}>
        {this.props.children}
      </Spin>
    </div>)
  }
  componentDidMount() {
    this.interceptors()
  }
}

Loading.defaultProps = {
  tip: '加载中...'
}

export default Loading
