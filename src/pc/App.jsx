import React from 'react';
import P_Login from './containers/login/login'

export default class PCApp extends React.Component{
    render(){
        return(
            <div>
                <h1>PC端，响应式开发max-device-width:1224px</h1>
                <P_Login/>
            </div>
        );
    };
}