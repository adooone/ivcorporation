import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
    MuiThemeProvider,
    //
} from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'react-custom-scroll/dist/customScroll.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import './sass/main.sass';
// import reducer from './redux/reducer/reducer';
import { theme } from './theme/styles';
import App from './components/App';
import store from './redux/store/store';

const history = createBrowserHistory();
const render = (MyApp) => {
    ReactDOM.render(
        <Provider store={ store }>
            <Router history={ history }>
                <MuiThemeProvider theme={ theme }>
                    <MyApp />
                </MuiThemeProvider>
            </Router>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);
