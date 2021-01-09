import React, {createContext, useState, useEffect} from "react";
import {client} from "./contentful";
import {feturedProducts} from "../utils/helpers";

export const ProductContext = createContext();

export default function ProductProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);

    useEffect(()=>{
        setLoading(true);
        client.getEntries({
            content_type: 'techStoreProductExample'
        })
            .then(response => {
                setProducts(response.items);
                const featured = feturedProducts(response.items)
                setFeatured(featured);
                setLoading(false);
            })
            .catch(console.error)

    },[]);

    return (
        <ProductContext.Provider value={{loading, products, featured}}>
            {children}
        </ProductContext.Provider>
    )
}