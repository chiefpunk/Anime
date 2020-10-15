import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './services/serviceWorker';
import 'assets/sass/style.scss';
import 'assets/css/bootstrap.min.css';
import 'assets/css/elegant-icons.css';
import 'assets/css/font-awesome.min.css';
import 'assets/css/style.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
