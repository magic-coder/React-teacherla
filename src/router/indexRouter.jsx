import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from '../component/NotFound/NotFound'
import HomeRouter from './HomeRouter'
import Login from '../containers/Login/Login'

class IndexRouter extends React.PureComponent {
  render() {
    return (<BrowserRouter>
      <Switch>
        <Route path='/' component={HomeRouter}/>
        <Route path='/login' exact="exact" component={Login}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>)
  }
}

export default IndexRouter
