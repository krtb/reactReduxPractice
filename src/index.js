import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// 'bank vault' for state of app
// manages updating state of app
import { createStore } from 'redux'
import App from './App'

// function that takes two args
// (current state, an action)

const counter = (state = 0, action) => {

// reducer returns next state
// dependent on ACTION that's passed into switch statement

    switch (action.type) {

        case 'INCREMENT':
            return state = state + 1;

        case 'DECREMENT':
            return state = state - 1;

        default:
            return state;
    }

};

// need to call createStore and pass in the REDUCER
const store = createStore(counter);

// then wrap app in PROVIDER
// allows React to have access to the STORE
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
