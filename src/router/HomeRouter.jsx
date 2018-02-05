import React from 'react'
import {Layout} from 'antd'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from '../component/Navbar/Navbar'
import Home from '../containers/Home/Home'
import Own from '../containers/Own/Own'
import ClassList from '../containers/ClassList/ClassList'
import VisitList from '../containers/VisitList/VisitList'
import './layout.css'

class HomeRouter extends React.PureComponent {
  render() {
    const {Header, Footer, Content} = Layout
    return (<Layout className='fullpage'>
      <Navbar/>
      <Content>
        <Route path='/' exact="exact" component={Home}/>
        <Route path='/classlist' component={ClassList}/>
        <Route path='/visitlist' component={VisitList}/>
        <Route path='/own' component={Own}/>
      </Content>
    </Layout>)
  }
}

export default HomeRouter
