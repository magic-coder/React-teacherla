import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Layouts from '../component/Layouts/Layouts'
import Home from '../containers/Home/Home'
import Own from '../containers/Own/Own'
import ClassList from '../containers/ClassList/ClassList'
import ClassStatus from '../containers/ClassStatus/ClassStatus'
import VisitList from '../containers/VisitList/VisitList'
import ClassStep from '../containers/ClassStep/ClassStep'
import ClassMustList from '../containers/ClassMustList/ClassMustList';
import NotFound from '../component/NotFound/NotFound'
import Choseplan from '../containers/Choseplan/Choseplan';

class HomeRouter extends React.PureComponent {
  render() {
    return (<Layouts>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/classlist' component={ClassList}/>
        <Route path='/visitlist' component={VisitList}/>
        <Route path='/classstatus/:courseid' component={ClassStatus}/>
        <Route path='/classstep/:courseid' component={ClassStep}/>
        <Route path='/choseplan/:teacherid' component={Choseplan} />
        <Route path='/classmustlist' component={ClassMustList}/>
        <Route path='/own' component={Own}/>
        <Route component={NotFound}/>
      </Switch>
    </Layouts>)
  }
}

export default HomeRouter
