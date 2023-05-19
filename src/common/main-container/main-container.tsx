import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './styles.scss';

import {Products} from '../products';
import {Menu} from '../menu';

export function MainContainer() {
    return (
        <div className='main-container'>
            <Routes>
                <Route path='/' element={<Menu/>}/>
                <Route path='/products'  element={<Products/>}/>
                <Route path='/news' element={<div>NEWS</div>}/>
            </Routes>
        </div>
    );
}
