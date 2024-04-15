import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login';
import Layout from '@/pages/layout';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Routes>
                    <Route path='/' element={<Layout />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;