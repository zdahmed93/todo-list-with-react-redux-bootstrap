import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomeContainer from './HomeContainer'
import {createStore} from 'redux';
import homeReducer from './store/reducers';
import {Provider} from 'react-redux';


const store=createStore(homeReducer);

ReactDOM.render(
    <Provider store={store}>
        <HomeContainer />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
