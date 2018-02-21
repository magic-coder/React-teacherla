import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Layouts from '../component/Layouts/Layouts'
import Home from '../containers/Home/Home'
import Own from '../containers/Own/Own'
import ClassList from '../containers/ClassList/ClassList'
import VisitList from '../containers/VisitList/VisitList'
import NotFound from '../component/NotFound/NotFound'

class HomeRouter extends React.PureComponent {
  render() {
    return (<Layouts>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/classlist' component={ClassList}/>
        <Route path='/visitlist' component={VisitList}/>
        <Route path='/own' component={Own}/>
        <Route component={NotFound}/>
      </Switch>
    </Layouts>)
  }
}

export default HomeRouter
