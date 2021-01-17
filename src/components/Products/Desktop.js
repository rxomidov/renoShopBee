import React from 'react';
import {ProductContext} from "../../context/product";
import Loading from "../Loading";
import ProductList from "./ProductList";

export default function Desktop(props) {
    const {loading, desktop} = React.useContext(ProductContext);
    if (loading) {
        return <Loading/>
    }
    return (
        <ProductList
            title="Desktop Computers"
            parag="Newest trends from top brands"
            products={desktop}
            desktop={true}
        />

    );
}
