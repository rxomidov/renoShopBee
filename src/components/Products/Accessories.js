import React from 'react';
import {ProductContext} from "../../context/product";
import Loading from "../Loading";
import ProductList from "./ProductList";

export default function Accessories(props) {
    const {loading, accessories} = React.useContext(ProductContext);
    if (loading) {
        return <Loading/>
    }
    return (
        <ProductList
            title="Accessories"
            parag="Newest trends from top brands"
            products={accessories}
            accessories={true}
        />

    );
}
