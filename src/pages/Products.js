import React from 'react';
import {ProductContext} from "../context/product";
import Loading from "../components/Loading";
import PageProducts from "../components/PageProducts";

export default function Products(props) {
    const {loading,products} = React.useContext(ProductContext);
    if (loading){
        return <Loading/>
    }
    return (
        <PageProducts/>
    );
}
