import React from 'react';
import {ProductContext} from "../context/product";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";

export default function Products(props) {
    const {loading,products} = React.useContext(ProductContext);
    if (loading){
        return <Loading/>
    }
    return (
        <ProductList
            title="our products"
            parag="Newest trends from top brands"
            products={products}
        />

    );
}
