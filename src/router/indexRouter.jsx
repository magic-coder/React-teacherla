import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomeRouter from './HomeRouter'
import Login from '../containers/Login/Login'
import Register from '../containers/Register/Register'
import AuthRouter from '../component/AuthRouter/AuthRouter'

class IndexRouter extends React.PureComponent {
  render() {
    return (<BrowserRouter>
      <div>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/' component={HomeRouter}/>
        </Switch>
      </div>
    </BrowserRouter>)
  }
}

export default IndexRouter
