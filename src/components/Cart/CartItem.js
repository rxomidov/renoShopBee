import React from 'react';
import styled from "styled-components";
import {MdRemoveShoppingCart} from "react-icons/all";
import {CartContext} from "../../context/cart";

export default function CartItem({id, title, price, image, amount}) {

    const {removeItem, increaseAmount, decreaseAmount} = React.useContext(CartContext);

    return (
        <CartItemWrapper>
            <div className="cart-topp">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div className="products">
                            <div className="row">
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
                                {/*Quantity*/}
                                <div className="product-name">
                                    <button
                                        onClick={() => decreaseAmount(id)}>-
                                    </button>
                                    {amount}
                                    <button
                                        onClick={() => increaseAmount(id)}>+
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-name">
                                    $ {price}
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-name">
                                    <div>
                                        $ {amount * price}
                                        <button className="btn btn-outline-danger"
                                                onClick={() => removeItem(id)}>
                                            <MdRemoveShoppingCart/>
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
   
  .cart-topp{
    //padding: 1rem;
    border-bottom: 1px solid lavender;
    //border-top: 1px solid lavender;
    font-size: 16px;
  }
  .noboreder{
      border-right: none!important;
      border-left: 1px solid lavender;
  }
  .product-name{
      height: 6rem;
      display:flex;
      align-items: center;
      justify-content:center;
      border-right: 1px solid lavender;
        
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
`
