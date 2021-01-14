import React, {useContext} from 'react';
import {CartContext} from "../context/cart";
import CartItem from "../components/Cart/CartItem";
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Cart(props) {
    let user = false;
    const {cart, total} = useContext(CartContext);
    console.log(cart);

    const handleSubmit = () => {

    };
    const handleClick = () => {

    };

    if (cart.length === 0) {
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
                            <div className="product-bordered pbl">
                                Products
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row no-gutters">
                                <div className="col-md-3">
                                    <div className="product-bordered">
                                        Color & Size
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-bordered">
                                        Quantity
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-bordered">
                                        Price
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-bordered">
                                        Total
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {cart.map(item => (
                    <CartItem key={item.id} {...item}/>
                ))}
                <div className="cart-bottom">
                    <Link to="/products" className="btn btn-back">
                        Continue Shopping
                    </Link>
                </div>
                <div className="cart-checkout">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coupon mt-5 text-left">
                                <h5 className="checkout-title">Use Coupon Code</h5>
                                <p className="checkout-subtitle">Enter Your Coupon Code</p>
                                <form onSubmit={handleSubmit}>
                                    <input className="subscribe-input"
                                           type="email"
                                           placeholder="Enter your coupon here"/>
                                    <button onClick={handleClick}
                                            className="btn btn-back"
                                            type="submit">Apply
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5 text-left">
                            <div className="voucher">
                                <h5 className="checkout-title">Use Gift Voucher</h5>
                                <p className="checkout-subtitle">Enter Your Gift Voucher Code</p>
                                <form onSubmit={handleSubmit}>
                                    <input className="subscribe-input"
                                           type="email"
                                           placeholder="Enter your gift voucher code"/>
                                    <button onClick={handleClick}
                                            className="btn btn-back"
                                            type="submit">Apply
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5 text-left">
                            <div className="voucher">
                                <h5 className="checkout-title">Sipping Availability</h5>
                                <p className="checkout-subtitle">Enter Your Gift Voucher Code</p>
                                <form onSubmit={handleSubmit}>
                                    <input className="subscribe-input"
                                           type="email"
                                           placeholder="Enter your gift voucher code"/>
                                    <button onClick={handleClick}
                                            className="btn btn-back"
                                            type="submit">Apply
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5 text-left">
                            <div className="voucher">
                                <h5 className="checkout-title">Shopping cart calculation</h5>
                                <div className="calculation">
                                    <div>
                                        <div>SubTotal</div>
                                        <div>$ {total}</div>
                                    </div>
                                    <div>
                                        <div>Coupon</div>
                                        <div>- $ {total / 10}</div>
                                    </div>
                                    <div>
                                        <div>Shipping</div>
                                        <div>Free Shippnig</div>
                                    </div>
                                </div>
                                <div className="total">
                                    <div>
                                        <div>Total</div>
                                        <div>$ {(total * 0.9).toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<h2>total : $ {total}</h2>*/}
                {user ?
                    <Link to="/checkout" className="btn btn-primary btn-block my-5">
                        checkout
                    </Link> :
                    <Link to="/login" className="btn btn-primary btn-block my-5">
                        login
                    </Link>
                }
            </div>
        </CartWrapper>
    );
}

const CartWrapper = styled.section`
  .coupon, .voucher{
    font-family: Poppins;
    .total{
      border: 1px solid lightgray;
      border-top: none;
      div{
        display:flex;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        font-size: 12px;
        font-weight:bold;
      }
    }
    .calculation{
      border: 1px solid lightgray;
      margin-top: 2rem;
      div{
        display:flex;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        font-size: 12px;
        font-weight:bold;
      }
    }
    form{
      display:flex;
      justify-content:center;
      
      input{
        width: 80%;
        padding: 0.6rem 1.5rem;
        border-radius: 0;
        border: 1px solid lightgray;
        outline: none;
        font-size: 12px;
        :focus{
          border: 1px solid #3cb878;  
        }
      }
      button{
        width: 20%;
        padding: 0.6rem 1.5rem;
        display:flex;
        justify-content:center;
      }
    }
  }
  .checkout-title{
    text-transform:uppercase;
    font-size: 16px;
    font-weight:bold;
  }
  .checkout-subtitle{
    color: #777777;
    font-size: 12px;
  }
  .cart-bottom{
    border: 1px solid lavender;
    border-top: none;
    padding: 0.5rem;
    display:flex;
    justify-content: flex-end;
  }
  .btn-back{
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
  .product-bordered{
      border-right: 1px solid lavender;
      padding: 1rem;
  }
  .pbl{
      border-left: 1px solid lavender;
  }
  .section-header{
    text-transform:capitalize;
    font-size: 2rem;
    font-family: Poppins;
    margin-bottom: 2rem;
  }
  .cart-top{
    //padding: 1rem;
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

