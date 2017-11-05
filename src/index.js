import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducer';
import './config';
import './static/icon/iconfont.css'
import './static/css/index.css'
import MediaQuery from 'react-responsive';
import MobileApp from './mobile/App';
import PCApp from './pc/App';

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f=>f
));

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <MediaQuery query='(max-device-width:1224px)'>
                            <MobileApp/>
                    </MediaQuery>
                    <MediaQuery query='(min-device-width:1224px)'>
                            <PCApp/>
                    </MediaQuery>
                </div>
            </Provider>
        );
    };
}

ReactDom.render(<Root/>, document.getElementById('root'));
