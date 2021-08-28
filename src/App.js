import React, { Fragment } from 'react';
import './App.module.css';
// React components
import { Navbar } from './components/layout';
import { Home, NotFound } from './components/pages';
import { Products, ProductDetails } from './components/products';
// Routing elements
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:slug" element={<ProductDetails />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Fragment>
    )
}

export default App;