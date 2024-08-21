import {CartPage, MainPage} from '../pages';
import { Route, Routes } from 'react-router-dom';

import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import React from 'react';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
            </Routes>
        </div>
    )
}

export default App;