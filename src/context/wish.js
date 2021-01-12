import React, {createContext, useState} from "react";
import {productData} from "../data/productData";

function getWishFromLocalStorage() {
    return localStorage.getItem("wish")
        ? JSON.parse(localStorage.getItem("wish")) : [];
}

export const WishContext = createContext();

export function WishProvider({children}) {
    const [wish, setWish] = useState(getWishFromLocalStorage);
    const [total, setTotal] = React.useState(0);
    const [cartItems, setCartItems] = React.useState(0);


    React.useEffect(() => {
        // local storage
        localStorage.setItem("wish", JSON.stringify(wish));
        // wish items
    }, [wish]);

    const removeWish = id => {
        let newCart = [...wish].filter(item => item.id !== id);
        setWish(newCart);
    };


    const addToWish = product => {
        //console.log(product);
        const {id} = product.sys;
        const {url} = product.fields.image.fields.file;
        const {title, price} = product.fields;
        const item = [...wish].find(item => item.id === id);
        //console.log(url);
        if(item){
            return;
        }else {
            const newItem={id,image:url,title,price,amount:1};
            const newCart=[...wish,newItem];
            setWish(newCart);
        }
        removeWish(id)

    };

    const clearWish = () => {
        setWish([]);
    };

    return <WishContext.Provider value={{
        wish, total, cartItems,
        removeWish, clearWish, addToWish
    }}>
        {children}
    </WishContext.Provider>
}
