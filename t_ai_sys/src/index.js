import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import reducers from './reducer'
import './config'
import MediaQuery from 'react-responsive';
import MobileApp from './mobile/App'
import PCApp from './pc/App'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <MediaQuery query='(max-device-width:1224px)'>
                        <BrowserRouter>
                            <MobileApp/>
                        </BrowserRouter>
                    </MediaQuery>
                    <MediaQuery query='(min-device-width:1224px)'>
                        <BrowserRouter>
                            <PCApp/>
                        </BrowserRouter>
                    </MediaQuery>
                </div>
            </Provider>
        );
    };
}

ReactDom.render(<Root/>, document.getElementById('root'));
