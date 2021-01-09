import React,{createContext, useState} from "react";
import {productData} from "../data/productData";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState(productData);
    const [total, setTotal] = useState(0);

    return <CartContext.Provider value={{cart, total}}>
        {children}
    </CartContext.Provider>
}
