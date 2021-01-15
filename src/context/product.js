import React, {createContext, useState, useEffect} from "react";
import {client} from "./contentful";
import {categoryDesktop, categoryLaptop, featuredProducts} from "../utils/helpers";

export const ProductContext = createContext();

export default function ProductProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [desktop, setDesktop] = useState([]);
    const [laptop, setLaptop] = useState([]);

    useEffect(()=>{
        setLoading(true);
        client.getEntries({
            content_type: 'techStoreProductExample'
        })
            .then(response => {
                setProducts(response.items);
                const featured = featuredProducts(response.items);
                const desktop = categoryDesktop(response.items);
                const laptop = categoryLaptop(response.items);

                setFeatured(featured);
                setDesktop(desktop);
                setLaptop(laptop)
                setLoading(false);
            })
            .catch(console.error)

    },[]);

    return (
        <ProductContext.Provider value={{loading, products, featured,
        desktop, laptop
        }}>
            {children}
        </ProductContext.Provider>
    )
}