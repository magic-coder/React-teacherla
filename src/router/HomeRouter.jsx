import React from 'react'
import {Layout} from 'antd'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from '../component/Navbar/Navbar'
import Layouts from '../component/Layouts/Layouts'
import Home from '../containers/Home/Home'
import './layout.css'

class HomeRouter extends React.PureComponent {
  render() {
    const {Header, Footer, Content} = Layout
    return (<Layout className='fullpage'>
      <Navbar/>
      <Content>
        <Route path='/' exact="exact" component={Home}/>
        <Route path='/layouts' component={Layouts}/>
      </Content>
    </Layout>)
  }
}

export default HomeRouter
