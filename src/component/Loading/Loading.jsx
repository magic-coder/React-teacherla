import React from 'react'
import axios from 'axios'
import {Spin} from 'antd'

class Loading extends React.Component {
  constructor() {
    super()
    this.state = {
      loading:false
    }
    this.interceptors = this.interceptors.bind(this)
  }
  interceptors(){
    if(axios.interceptors.request.use(function () {
      return true
    }) || this.state.loading === true){
      console.log('拦截响应')
      this.setState({
        loading:false
      })
    }else if(axios.interceptors.response.use(function () {
      return true
    }) || this.state.loading === false){
      console.log('拦截请求')
      this.setState({
        loading:true
      })
    }
  }
  render(){
    console.log(this.state)
    return(
      <Spin spinning={this.state.loading} tip={this.props.tip}>
        {this.props.children}
      </Spin>
    )
  }
  componentDidMount(){
    this.interceptors()
  }
}

Loading.defaultProps = {
  tip:'加载中...'
}

export default Loading
