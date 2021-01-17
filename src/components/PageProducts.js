import React from 'react';
import ProductList from "./Products/ProductList";
import {ProductContext} from "../context/product";
import styled from "styled-components";
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/all";

export default function PageProducts(props) {
    const {products, page, changePage} = React.useContext(ProductContext);
    //console.log(products[page]);
    if (products[page]) {
        return (
            <>
                <ProductList
                    title="our products"
                    parag="Newest trends from top brands"
                    products={products[page]}
                />
                <PaginateWrapper>
                    {products.length > 1 && <article className="paginate-buttons">
                        {/*    prev*/}
                        {page > 0 && (
                            <button className="page-btn"
                                    onClick={() => changePage(page - 1)}>
                                <FaAngleDoubleLeft/>
                            </button>
                        )}
                        {products.map((_, index) => {
                            return <button onClick={() => changePage(index)}
                                           key={index}
                                           className={`page-btn ${page === index && `page-btn-current`}`}>
                                {index + 1}
                            </button>
                        })}
                        {/*    next*/}
                        {page < products.length - 1 && (
                            <button className="page-btn"
                                    onClick={() => changePage(page + 1)}>
                                <FaAngleDoubleRight/>
                            </button>
                        )}
                    </article>}
                </PaginateWrapper>
            </>
        );
    } else {
        return <h1>Noooo</h1>
    }
}
const PaginateWrapper = styled.div`
  .bgnone{
    background:none!important;
  }
  .paginate-buttons{
    display: flex;
    justify-content:center;
    .page-btn{
      display:flex;
      align-items:center;
      border: none;
      color: #3cb878;
      padding: 0.5rem 1rem;
      margin: 1rem;
      transition: 0.3s;
      outline: none;
      :hover{
        background:#3cb878;
        color:#fff;
      }
    }
    .page-btn-current{
        background:#3cb878;
        color:#fff;
      }
  }
`
