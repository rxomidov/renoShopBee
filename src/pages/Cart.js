import React, {useContext} from 'react';
import {CartContext} from "../context/cart";
import CartItem from "../components/Cart/CartItem";
import styled from "styled-components";

export default function Cart(props) {
    const {cart} = useContext(CartContext);
    console.log(cart);

    if (cart.length === 0){
        return (
            <h1>empty card</h1>
        )
    }
    return (
        <CartWrapper>
            <div className="container">
                <h1>Your Cart</h1>
                <div className="cart-top">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="products">
                                Products
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-3">
                                    Color&Size
                                </div>
                                <div className="col-md-3">
                                    Quantity
                                </div>
                                <div className="col-md-3">
                                    Price
                                </div>
                                <div className="col-md-3">
                                    Total
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {cart.map(item => (
                    <CartItem key={item.sys.id} {...item}/>
                ))}
            </div>
        </CartWrapper>
    );
}

const CartWrapper = styled.section`
  .cart-top{
    padding: 1rem;
    border-bottom: 1px solid lavender;
    border-top: 1px solid lavender;
    font-size: 16px;
  }
`

