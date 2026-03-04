import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../app/App.jsx';
import { CartProvider } from '../features/cart/CartContext.jsx';
import '../index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <CartProvider>
        <App />
    </CartProvider>
);