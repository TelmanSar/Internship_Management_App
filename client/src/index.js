import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter'
import * as serviceWorker from './serviceWorker'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';


const store = configureStore();
window.store = store;


ReactDOM.render(
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <AppRouter/>
        </MuiPickersUtilsProvider>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();