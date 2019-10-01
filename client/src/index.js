import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter'
import * as serviceWorker from './serviceWorker'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import {Provider} from 'react-redux';

const store = configureStore();
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();