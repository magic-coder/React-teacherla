import React from 'react'
import ReactDom from 'react-dom'
import MobileApp from './mobile/App'
import PCApp from './pc/App'
import MediaQuery from 'react-responsive';

class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query='(max-device-width:1224px)'>
                    <MobileApp/>
                </MediaQuery>
                <MediaQuery query='(min-device-width:1224px)'>
                    <PCApp/>
                </MediaQuery>
            </div>
        );
    };
}

ReactDom.render(<Root/>,document.getElementById('root'));
