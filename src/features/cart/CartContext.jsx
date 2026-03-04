import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        setCart(prev => [...prev, item]);
    }

    function removeFromCart(index) {
        setCart(prev => prev.filter((_, i) => i !== index));
    }

    function clearCart() {
        setCart([]);
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.subtotal,0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}