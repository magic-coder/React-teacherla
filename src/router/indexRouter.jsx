import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Index from '../containers/index'
import NotFound from '../component/NotFound/NotFound'
import Layouts from '../component/Layouts/Layouts'

class IndexRouter extends React.PureComponent {
  render(){
    return (
      <BrowserRouter>
        <Index>
          <Switch>
            <Route path='/' exact component={Index}/>
            <Route component={Layouts}/>
          </Switch>
        </Index>
      </BrowserRouter>
    )
  }
}

export default IndexRouter
