import React from 'react';
import styled from "styled-components";
import {FaCartPlus, FaHeart, FaRecycle} from "react-icons/all";
import productRating from '../../assets/productRating.png'
import {Link} from "react-router-dom";

export default function Product({fields, sys}) {
    return (
        <div className="col-md-3 col-sm-6">
            <ProductWrapper>
                <div className="product-card">
                    <div className="product-card-img">
                        <img className="" src={fields.image.fields.file.url} alt=""/>
                        <div className="img-after">
                            <Link to={`products/${sys.id}`}>
                                <FaCartPlus/>
                            </Link>
                            <Link to={`products/${sys.id}`}>
                                <FaHeart/>
                            </Link>
                            <Link to={`products/${sys.id}`}>
                                <FaRecycle/>
                            </Link>
                        </div>
                    </div>
                    <div className="product-info">
                        <div className="product-name">{fields.title}</div>
                        <div className="product-price">$ {fields.price}</div>
                        <img src={productRating} alt="product rating"/>
                    </div>
                </div>

            </ProductWrapper>
        </div>
    );
}

const ProductWrapper = styled.div`
  .product-card{
    width: 100%;
    height: 400px;
    background:white;
    font-weight:bold;
    transition:0.3s;
    position:relative;
    
    :hover{
      background:#efefef;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
  .product-card-img{
    width: 100%;
    height: 320px;
    padding: 0.1rem;
    overflow:hidden;
    
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s;
      :hover{
        transform: scale(1.1);
      }
    }
  }
  .img-after{
    position:absolute;
    width: 15%;
    height: 40%;
    top: 0;
    right: 0;
    opacity: 0;
    transition: 0.3s;
    //background:#000;
    
    a {
      font-size: 1.6rem;
      
      color: #fff;
      display:flex;
      justify-content:center;
      align-items: center;
      svg{
        padding: 0.3rem;
        margin: 0.2rem;
        background:#3cb878;
        transition: 0.3s;
        :hover{
          background:#287b50;
        }
      }
    }
  }
  .product-card-img:hover .img-after{
    opacity: 1;
  }
  .product-info{
     text-align: left;
     padding: 0 0.5rem;
     img{
      width: 60px;
     }
  }
  .product-name{
   text-transform:capitalize;
   font-size: 12px;
   margin-top: 0.5rem;
  }
  .product-price{
    font-size: 12px;
    color:#3cb878;
  }
`