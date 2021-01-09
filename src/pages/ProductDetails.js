import React from 'react';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {ProductContext} from "../context/context";
import Loading from "../components/Loading";
import styled from "styled-components";
import productRating from '../assets/productRating.png';
import {FaCartPlus, FaChevronLeft, FaRegHeart, FaRecycle} from "react-icons/all";

export default function ProductDetails(props) {
    const {id} = useParams();
    const history = useHistory();
    //console.log(id)
    const {products} = React.useContext(ProductContext);
    const product = products.find(product => product.sys.id === id)
    console.log(product);

    if (!products) {
        return <Loading/>
    }
    const {fields} = product;
    let url = fields.image.fields.file.url;

    return (
        <ProductWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="product-img">
                            <img src={url} alt="product image"/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h3 className="product-title">
                            {fields.title}
                        </h3>
                        <div>
                            <h4 className="product-price">
                                {fields.price}
                            </h4>
                            <img src={productRating} alt=""/>
                        </div>
                        <p className="product-description">
                            {fields.description}
                        </p>
                        <div className="product-details">
                            <div className="product-size">
                                <select name="productSize" id="product">
                                    <option value="">Select Size</option>
                                    <option value="17.3">17.3</option>
                                    <option value="15.6">15.6</option>
                                </select>
                            </div>
                            <div className="product-color">
                                <select name="productColor" id="product">
                                    <option value="">Select Color</option>
                                    <option value="white">white</option>
                                    <option value="black">black</option>
                                </select>
                            </div>
                        </div>
                        <div className="product-quantity">
                            <button className="btn btn-minus">-</button>
                            <div className="quantity">3</div>
                            <button className="btn btn-plus">+</button>
                        </div>
                        <div className="product-buttons">
                            <button
                                className="btn btn-add"
                                onClick={() => {
                                    //addToCart(product);
                                    history.push('/cart')
                                }}
                            >   <FaCartPlus/>
                                add to cart
                            </button>
                            <button
                                className="btn btn-back"
                                onClick={() => {
                                    //addToCart(product);
                                    history.push('/products')
                                }}
                            >   <FaChevronLeft/>
                                <div>
                                    back to products
                                </div>
                            </button>
                            <button
                                className="btn btn-icon"
                                onClick={() => {
                                    //addToCart(product);
                                    //history.push('/products')
                                }}
                            >
                                <FaRegHeart/>
                            </button>
                            <button
                                className="btn btn-icon"
                                onClick={() => {
                                    //addToCart(product);
                                    //history.push('/products')
                                }}
                            >
                                <FaRecycle/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ProductWrapper>
    );
}

const ProductWrapper = styled.section`
  padding: 2rem 0;
  font-size: 12px;
  font-family: Poppins;
  //button{
  //  outline: none!important;
  //}
  
  .product-details{
    display:flex;
    justify-content: space-between;
    .product-size, .product-color{
      width: 48%;
      select{
        padding: 0.5rem 1rem;
        border: 1px solid lavender;
        margin: 1rem 0;
        width: 100%;
      }
    }
  }
  .product-description{
    padding: 1rem 0;
    border-bottom: 1px solid lavender;
  }
  .product-buttons{
    display:flex;
  }
  .product-img{
  
    img{
      width: 100%;
    }
  }
  .btn-add, .btn-back{
    text-transform:uppercase;
    background:#3cb878;
    padding: 0.5rem 1rem;
    color:#fff;
    font-weight:bold;
    font-size: 12px;
    font-family: Poppins;
    display:flex;
    align-items: center;
    border-radius: 0;
   transition: 0.3s;
    
    svg{
      margin-right: 0.5rem;
    }
    :hover{
      background:#27784e;
    }
  }
  .btn-icon, .btn-plus, .btn-minus, .quantity{
      text-transform:uppercase;
        background:#fff;
        padding: 0.5rem 1rem;
        color:#000;
        font-weight:bold;
        font-size: 12px;
        border: 1px solid lavender;
        font-family: Poppins;
        display:flex;
        align-items: center;
        border-radius: 0;
       transition: 0.3s;
       
       margin-left: 0.5rem;
    }
    .product-quantity{
      display:flex;
      .btn-minus, .btn-plus, .quantity{
        margin: 1rem 0;
      }
    }
    .quantity{
      width: 20%;
    }
    
    @media screen and (max-width: 768px){
      .btn-back{
        margin-left: 0.5rem;
        div{
          display:none;
        }
        svg{
          margin: 0;
        }
      }
    }
`
