import React from 'react';
import styled from "styled-components";
import Product from "./Product";
import {Link} from "react-router-dom";

export default function ProductList({title, parag, products}) {
    console.log(products);
    return (
        <FeaturedWrapper>
            <div className="container text-center">
                {/*<nav aria-label="breadcrumb">*/}
                {/*    <ol className="breadcrumb">*/}
                {/*        <li className="breadcrumb-item"><Link to="/">Home</Link></li>*/}
                {/*        <li className="breadcrumb-item text-success" aria-current="page">Products</li>*/}
                {/*    </ol>*/}
                {/*</nav>*/}
                <h2 className="section-header">{title}</h2>
                <p className="section-parag">{parag}</p>
                <div className="row">
                    {products.map(product => (
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
    margin-top: 2rem;
    font-family: Poppins;
    font-weight:bold;
    text-transform:uppercase;
  }
  .section-parag{
    font-style: italic;
    color:#3cb878;
    margin-bottom: 2rem;
  }
  .breadcrumb{
    background: none;
    margin-top: 1rem;
    font-size: 12px;
    li{
      a{
        text-decoration:none;
      }
    }
  }
  .breadcrumb li+li:before {
    content: ">";
    font-weight:bold;
  }
`