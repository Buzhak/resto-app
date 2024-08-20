import {CartPage, MainPage} from '../pages';

import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import React from 'react';
import WithRestoService from '../hoc';

const App = ({RestoService}) => {
    console.log(RestoService.getMenuItems());
    
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <MainPage/>
            <CartPage/>
        </div>
    )
}

export default WithRestoService()(App);