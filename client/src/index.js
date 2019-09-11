import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
import LoginPage from './components/LoginPage'
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

const store = configureStore();
window.store = store;

ReactDOM.render(<LoginPage store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();