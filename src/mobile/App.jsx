import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import M_Login from './containers/login/login';
import M_Register from './containers/register/register'
import M_AuthRoute from './component/authroute/authroute'

export default class MobileApp extends React.Component {
    render(){
     return(
         <BrowserRouter>
             <div>
                 <M_AuthRoute/>
                 <Route path='/m_login' component={M_Login}/>
                 <Route path='/m_register' component={M_Register}/>
                 <div>
                     <Redirect to='/m_login'></Redirect>
                 </div>
             </div>
         </BrowserRouter>
     )
    }
}