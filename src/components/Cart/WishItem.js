import React, {useContext} from 'react';
import styled from "styled-components";
import {FaTimesCircle} from "react-icons/all";
import {WishContext} from "../../context/wish";
import {useHistory, useParams} from "react-router-dom";
import {CartContext} from "../../context/cart";
import {ProductContext} from "../../context/product";

export default function WishItem({id, title, price, image}) {
    const history = useHistory();

    const {removeWish} = useContext(WishContext);
    const {addToCart} = useContext(CartContext);
    const {products} = useContext(ProductContext);

    const product = products.find(product => product.sys.id === id);

    return (
        <CartItemWrapper>
            <div className="cart-topp">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div className="products">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <div className="product-name noboreder">
                                        <img src={image} alt="image"/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="product-name">
                                        {title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row rowwidth no-gutters">
                            <div className="col-md-3">
                                <div className="product-name">
                                    Color&Size
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-name ext-success">
                                    $ {price}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-name pb2rem text-primary">
                                    <div>
                                        <button className="btn btn-add"
                                                onClick={() => {
                                                    addToCart(product);
                                                    removeWish(id);
                                                    history.push('/cart')
                                                }}>
                                            Add To Cart
                                        </button>
                                        <button className="btn btn-remove"
                                                onClick={() => removeWish(id)}>
                                            <FaTimesCircle/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CartItemWrapper>
    );
}

const CartItemWrapper = styled.div`
   .product-quantity{
    height: 3rem;
    padding: 0 0.5rem!important;
    
    .btn-minus, .btn-plus{
      border: 1px solid lavender;
      border-radius: 0;
      font-weight:bold;
      height: 100%;
      padding: 0 1rem;
      width: 3rem;
   }
   .quantity{
        display: flex;
        justify-content:center;
        border-bottom: 1px solid lavender;
        border-top: 1px solid lavender;
        height: 100%;
        padding: 0 1rem;
       }
   }
  .cart-topp{
    //padding: 1rem;
    border-bottom: 1px solid lavender;
    //border-top: 1px solid lavender;
    font-size: 12px;
    font-weight:bold;
  }
  .noboreder{
      border-right: none!important;
      border-left: 1px solid lavender;
  }
  .product-name{
      height: 8rem;
      display:flex;
      align-items: center;
      justify-content:center;
      text-transform:capitalize;
      border-right: 1px solid lavender;
      font-family: Poppins;
      .btn-add{
        border-radius: 0;
        background:#fff;
        outline: none;
        color:#000;
        transition: 0.3s;
        :hover{
          background:#3cb878;
          color: #fff;
        }
      }
      .btn-remove{
        border-radius: 0;
        outline: none;
        color:#000;
        transition: 0.3s;
        :hover{
          color: red;
        }
      }
      
      img{
        padding: 1rem;
      }
      div{
        width: 100%;
        padding: 0 2rem;
        display:flex;
        align-items: center;
        justify-content:space-between;  
      }
  }
  .rowwidth{
    width: 100%;
  }
  .products{
    img{
      width: 100%;
    }
  }
  
  @media screen and (max-width: 768px){
    .product-name{
      height: inherit;
      padding: 0.5rem 0;
      border: none;
      
      div{
        justify-content:space-around;
      }
    }
    .pb2rem{
      padding-bottom: 2rem;
    }
    .products{
      img{
        width: 60%;
      } 
    }
  }
`
