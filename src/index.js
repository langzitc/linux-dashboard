import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './style.scss';
import routes from './routes'
import * as serviceWorker from './serviceWorker';
import { Spin } from 'antd';

ReactDOM.render(
    <BrowserRouter>
        <Suspense fallback={<div className="loading-wrap"><Spin /></div>}>
            {renderRoutes(routes)}
        </Suspense>
    </BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
