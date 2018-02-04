import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from '../component/NotFound/NotFound'
import Layouts from '../component/Layouts/Layouts'

class IndexRouter extends React.PureComponent {
  render(){
    return (
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={NotFound}/>
            <Route component={Layouts}/>
          </Switch>
      </BrowserRouter>
    )
  }
}

export default IndexRouter
