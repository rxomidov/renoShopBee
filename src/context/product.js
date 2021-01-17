import React, {createContext, useState, useEffect} from "react";
import {client} from "./contentful";
import {
    categoryAccessories, categoryDesktop, categoryLaptop, categoryPhone,
    featuredProducts, paginate
} from "../utils/helpers";

export const ProductContext = createContext();

export default function ProductProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [desktop, setDesktop] = useState([]);
    const [laptop, setLaptop] = useState([]);
    const [phone, setPhone] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(()=>{
        setLoading(true);
        client.getEntries({
            content_type: 'techStoreProductExample'
        })
            .then(response => {
                const products = response.items;
                setProducts(paginate(products));
                const featured = featuredProducts(response.items);
                const desktop = categoryDesktop(response.items);
                const laptop = categoryLaptop(response.items);
                const phone = categoryPhone(response.items);
                const accessories = categoryAccessories(response.items);

                setFeatured(featured);
                setDesktop(desktop);
                setLaptop(laptop);
                setPhone(phone);
                setAccessories(accessories);
                setLoading(false);
            })
            .catch(console.error)

    },[]);

    const changePage = (index) => {
        setPage(index);
    };


    return (
        <ProductContext.Provider value={{loading, products, featured,
        desktop, laptop, phone, accessories, page, changePage
        }}>
            {children}
        </ProductContext.Provider>
    )
}