import React from 'react'
import {Route} from 'react-router-dom'
import Layouts from '../component/Layouts/Layouts'
import Home from '../containers/Home/Home'
import Own from '../containers/Own/Own'
import ClassList from '../containers/ClassList/ClassList'
import VisitList from '../containers/VisitList/VisitList'

class HomeRouter extends React.PureComponent {
  render() {
    return (<Layouts>
        <Route path='/' exact component={Home}/>
        <Route path='/classlist' component={ClassList}/>
        <Route path='/visitlist' component={VisitList}/>
        <Route path='/own' component={Own}/>
    </Layouts>)
  }
}

export default HomeRouter
