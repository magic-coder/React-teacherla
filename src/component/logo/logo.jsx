import React from 'react';
import logoImg from './xit_1x.png';
import './logo.css';

class Logo extends  React.Component{
    render(){
        return(
            <div className="logo_container">
                <img className="xit_logo" src={logoImg} alt="xit"/>
            </div>
        )
    }
}

export default Logo