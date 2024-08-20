import './index.scss';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

const restoService = new RestoService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
);
