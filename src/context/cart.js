import React,{createContext, useState} from "react";
import {productData} from "../data/productData";

function getCartFromLocalStorage() {
    return localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")) : [];
}

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState(getCartFromLocalStorage);
    const [total,setTotal]=React.useState(0 );
    const [cartItems,setCartItems]=React.useState(0);

    React.useEffect(() => {
        // local storage
        localStorage.setItem("cart", JSON.stringify(cart));
        // cart items
        let newCartItems = cart.reduce((total, cartItem) => {
            //.log(total,cartItem);
            return (total += cartItem.amount);
        }, 0);
        setCartItems(newCartItems);
        // cart total
        let newTotal = cart.reduce((total, cartItem) => {
            return (total += cartItem.amount * cartItem.price);
        }, 0);
        newTotal = parseFloat(newTotal.toFixed(2));
        setTotal(newTotal);
    }, [cart]);

    const removeItem = id =>{
        let newCart = [...cart].filter(item=>item.id !== id);
        setCart(newCart);
    };

    const increaseAmount = (id) => {
        const newCart = [...cart].map(item => {
            return item.id === id ? {...item, amount:item.amount+1}
            : {...item}
        });
        setCart(newCart);
    };

    const decreaseAmount = (id,amount) =>{
        if (amount===1){
            removeItem(id);
            return;
        } else {
            const newCart = [...cart].map(item=>{
                return item.id === id?{...item,amount:item.amount-1}:
                    {...item}
            });
            setCart(newCart)
        }
    };

    const addToCart = product =>{
        //console.log(product);
        const {id}=product.sys;
        const {image}=product.fields.image.fields.file;
        const {title,price}=product.fields;
        console.log(id);
        const item = [...cart].find(item=>item.id===id);
        // console.log(item.id);
        // if(item){
        //      increaseAmount(id)
        // }else {
        //     const newItem={id,image,title,price,amount:1};
        //     const newCart=[...cart,newItem];
        //     setCart(newCart);
        // }
    };

    const clearCart = () =>{
        setCart([]);
    };

    return <CartContext.Provider value={{cart, total, cartItems,
        addToCart, removeItem, increaseAmount, decreaseAmount, clearCart
    }}>
        {children}
    </CartContext.Provider>
}
