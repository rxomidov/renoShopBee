import React from 'react';
import {ProductContext} from "../../context/product";
import Loading from "../Loading";
import styled from "styled-components";
import ProductList from "./ProductList";

export default function FeaturedProducts(props) {
    const {loading,featured} = React.useContext(ProductContext);
    if (loading){
        return <Loading/>
    }
    return (
        <ProductList
            title="featured products"
            parag="Newest trends from top brands"
            products={featured}
        />

    );
}

