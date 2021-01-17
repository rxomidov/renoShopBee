import React from 'react';
import {ProductContext} from "../../context/product";
import Loading from "../Loading";
import ProductList from "./ProductList";

export default function Laptop(props) {
    const {loading,laptop} = React.useContext(ProductContext);
    if (loading){
        return <Loading/>
    }
    return (
        <ProductList
            title="Laptop Computers"
            parag="Newest trends from top brands"
            products={laptop}
            laptop={true}
        />

    );
}
