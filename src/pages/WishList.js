import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import styled from "styled-components";
import WishItem from "../components/Cart/WishItem";
import {WishContext} from "../context/wish";

export default function WishList(props) {

    const {wish} = useContext(WishContext);
    console.log(wish);

    if (wish.length === 0){
        return (
            <CartWrapper>
                <div className="container text-center">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                            <li className="breadcrumb-item text-success" aria-current="page">WishList</li>
                        </ol>
                    </nav>
                    <h1>empty wishList</h1>
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
                        <li className="breadcrumb-item text-success" aria-current="page">WishList</li>
                    </ol>
                </nav>
                <h1>Your WishList</h1>
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
                                    Price
                                </div>
                                <div className="col-md-6">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {wish.map(item => (
                    <WishItem key={item.id} {...item}/>
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