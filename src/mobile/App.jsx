import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import M_Login from './containers/login/login';
import M_Register from './containers/register/register'
import M_AuthRoute from './component/authroute/authroute'
import './static/css/App.css'

function M_Index() {
    return(
        <h2>移动主页</h2>
    );
}

export default class MobileApp extends React.Component {
    render(){
     return(
         <BrowserRouter>
             <div>
                 <M_AuthRoute/>
                 <Route path='/login' component={M_Login}/>
                 <Route path='/register' component={M_Register}/>
                 <Route path='/index' component={M_Index}/>
             </div>
         </BrowserRouter>
     )
    }
}
