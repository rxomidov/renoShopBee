import React from 'react';
import {ProductContext} from "../../context/product";
import Loading from "../Loading";
import ProductList from "./ProductList";

export default function Phone(props) {
    const {loading,phone} = React.useContext(ProductContext);
    if (loading){
        return <Loading/>
    }
    return (
        <ProductList
            title="Mobile Phones"
            parag="Newest trends from top brands"
            products={phone}
        />

    );
}
