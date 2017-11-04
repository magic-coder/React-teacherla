import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import M_Login from './containers/login/login';
import M_Register from './containers/register/register'

export default class MobileApp extends React.Component {
    render(){
     return(
         <BrowserRouter>
             <div>
                 <Route path={`/login`} component={M_Login}/>
                 <Route path={`/register`} component={M_Register}/>
             </div>
         </BrowserRouter>
     )
    }
}