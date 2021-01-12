import React, {useContext} from 'react';
import {CartContext} from "../context/cart";
import CartItem from "../components/Cart/CartItem";
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Cart(props) {
    let user = false;
    const {cart, total} = useContext(CartContext);
    console.log(cart);

    if (cart.length === 0){
        return (
            <CartWrapper>
                <div className="container text-center">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                            <li className="breadcrumb-item text-success" aria-current="page">Cart</li>
                        </ol>
                    </nav>
                    <h2 className="section-header">empty cart</h2>
                </div>
            </CartWrapper>
        )
    }
    return (
        <CartWrapper>
            <div className="container text-center">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                        <li className="breadcrumb-item text-success" aria-current="page">Cart</li>
                    </ol>
                </nav>
                <h2 className="section-header">Your Cart</h2>
                <div className="cart-top">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <div className="products">
                                Products
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row no-gutters">
                                <div className="col-md-3">
                                    Color & Size
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
                    <CartItem key={item.id} {...item}/>
                ))}
                <h2>total : $ {total}</h2>
                {user ?
                    <Link to="/checkout" className="btn btn-primary btn-block">
                        checkout
                    </Link> :
                    <Link to="/login" className="btn btn-primary btn-block">
                        login
                    </Link>
                }
            </div>
        </CartWrapper>
    );
}

const CartWrapper = styled.section`
  .section-header{
    text-transform:capitalize;
    font-size: 2rem;
    font-family: Poppins;
    margin-bottom: 2rem;
  }
  .cart-top{
    padding: 1rem;
    border-bottom: 1px solid lavender;
    border-top: 1px solid lavender;
    font-size: 12px;
    font-weight:bold;
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
  
  @media screen and (max-width: 768px){
    .cart-top{
      display:none;
      
    }
  }
`

