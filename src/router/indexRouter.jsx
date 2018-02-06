import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from '../component/NotFound/NotFound'
import HomeRouter from './HomeRouter'
import Login from '../containers/Login/Login'
import Register from '../containers/Register/Register'

class IndexRouter extends React.PureComponent {
  render() {
    return (<BrowserRouter>
        <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <HomeRouter/>
        <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>)
  }
}

export default IndexRouter
