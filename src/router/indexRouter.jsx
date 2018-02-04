import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from '../component/NotFound/NotFound'
import Layouts from '../component/Layouts/Layouts'
import UserDo from '../containers/UserDo/UserDo'

class IndexRouter extends React.PureComponent {
  render(){
    return (
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={UserDo}/>
            <Route path='/user' component={UserDo}/>
            <Route path='/layout' component={Layouts}/>
            <Route component={NotFound}/>
          </Switch>
      </BrowserRouter>
    )
  }
}

export default IndexRouter
