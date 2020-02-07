import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware,} from "redux";
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './frontend/reducer/reducer'
import './index.css';
import App from './App';

const store = createStore(reducer,applyMiddleware(thunkMiddleware));
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

