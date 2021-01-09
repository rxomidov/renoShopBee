import React from 'react';
import styled from "styled-components";
import Product from "./Product";

export default function ProductList({title, parag, products}) {
    console.log(products);
    return (
        <FeaturedWrapper>
            <div className="container text-center">
                <h2 className="section-header">{title}</h2>
                <p className="section-parag">{parag}</p>
                <div className="row">
                    {products.map(product=>(
                        <Product key={product.sys.id} {...product}/>
                    ))}
                </div>
            </div>
        </FeaturedWrapper>
    );
}

const FeaturedWrapper = styled.section`
  padding-bottom: 4rem;
  .section-header{
    margin-top: 4rem;
    font-family: Poppins;
    font-weight:bold;
    text-transform:uppercase;
  }
  .section-parag{
    font-style: italic;
    color:#3cb878;
    margin-bottom: 2rem;
  }
`