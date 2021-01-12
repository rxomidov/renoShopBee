import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductProvider from "./context/product";
import {CartProvider} from "./context/cart";
import {WishProvider} from "./context/wish";

ReactDOM.render(
    <CartProvider>
        <WishProvider>
            <ProductProvider>
                <App/>
            </ProductProvider>
        </WishProvider>
    </CartProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
