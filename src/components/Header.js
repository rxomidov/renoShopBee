import React, {useState} from 'react';
import logo from '../assets/Renoshopbee.svg'
import {Link} from "react-router-dom";
import {
    FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaTelegram, FaFacebookF, FaLinkedin,
    FaCartPlus, FaSearch, FaAlignJustify,
    FaHome, FaMale, FaFemale, FaSnowflake, FaBaseballBall, FaShoppingBag, FaHeart
} from "react-icons/all";
import './Header.css';
import styled from "styled-components";
import {CartContext} from "../context/cart";
import {WishContext} from "../context/wish";

export default function Header({isOpen, toggle}) {
    const [icons] = useState([
        {id: 1, icon: <FaInstagram/>, link: "https://instagram.com"},
        {id: 2, icon: <FaTwitter/>, link: "https://twitter.com"},
        {id: 3, icon: <FaTelegram/>, link: "https://telegram.org"},
        {id: 4, icon: <FaFacebookF/>, link: "https://facebook.com"},
        {id: 5, icon: <FaLinkedin/>, link: "https://linkedin.com"},
    ]);
    const {cartItems} = React.useContext(CartContext);
    const {wishItems} = React.useContext(WishContext);

    return (
        <header className="header">
            <div className="header-top">
                <div className="header-top-left">
                    <div>
                        <FaAlignJustify onClick={toggle}/>
                    </div>
                    <div className="htpb">
                        <FaPhoneAlt/>
                        <div className="header-top-phone">
                            +998 99 992 28 17
                        </div>
                    </div>
                    <div>
                        <FaEnvelope/>
                        <div className="header-top-email">
                            rixsitilloxomidov@gmail.com
                        </div>
                    </div>
                </div>
                <div className="header-top-right">
                    <div className="header-top-icons">
                        {icons.map(icon => (
                            <a key={icon.id} href={icon.link}>{icon.icon}</a>
                        ))}
                    </div>
                </div>
            </div>
            <nav>
                <ul>
                    <div className="header-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                </ul>
                <ul>
                    <div className="header-middle-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/men">Men</Link>
                        </li>
                        <li>
                            <Link to="/laptop">Laptop</Link>
                        </li>
                        <li>
                            <Link to="/desktop">Desktop</Link>
                        </li>
                        <li>
                            <Link to="/accessories">Accessories</Link>
                        </li>
                    </div>
                </ul>
                <ul>
                    <div className="header-last-links">
                        <li>
                            <div className="top-search">
                                <FaSearch/>
                                <input className="top-search-input" type="text"/>
                            </div>
                        </li>
                        <li>
                            <Link className="top-cart" to="/wishlist">
                                <FaHeart/>
                                {wishItems > 0 && (
                                    <span className="cart-link-total">{wishItems}</span>
                                )}
                            </Link>
                        </li>
                        <li>
                            <Link className="top-cart" to="/cart">
                                <FaCartPlus/>
                                {cartItems > 0 && (
                                    <span className="cart-link-total">{cartItems}</span>
                                )}
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
            <SidebarWrapper isOpen={isOpen} onClick={toggle}>
                <div className="sidebar">
                    <ul>
                        <div>
                            <li>
                                <Link to="/" onClick={toggle}><FaHome/>Home</Link>
                            </li>
                            <li>
                                <Link to="/products" onClick={toggle}>
                                    <FaShoppingBag/>All Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/men" onClick={toggle}><FaMale/>Men</Link>
                            </li>
                            <li>
                                <Link to="/women" onClick={toggle}><FaFemale/>Women</Link>
                            </li>
                            <li>
                                <Link to="/jewelery" onClick={toggle}><FaSnowflake/>Jewelery</Link>
                            </li>
                            <li>
                                <Link to="/accessories" onClick={toggle}><FaBaseballBall/>Accessories</Link>
                            </li>
                            <li>
                                <hr className="hr"/>
                            </li>
                            <li>
                                <Link to="/" onClick={toggle}><FaPhoneAlt/>Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={toggle}><FaEnvelope/>Send Message</Link>
                            </li>
                            <li>
                                <hr className="hr"/>
                            </li>
                            <li>
                                <Link to="/cart" onClick={toggle}><FaCartPlus/>Your Cart</Link>
                            </li>
                            <li>
                                <Link to="/wishlist" onClick={toggle}><FaHeart/>Your WishList</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </SidebarWrapper>
        </header>
    );
}

const SidebarWrapper = styled.div`
   position:fixed;
   top: 0;
   opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
   left: ${({isOpen}) => (isOpen ? '0' : '-100%')};
   z-index: 100;
   width: 100%;
   height: 100%;
   background:rgba(0,0,0,0.5);
   transition: 0.3s;
   .hr{
    border-bottom: 2px solid #282c34;
    width: 100%;
   }
   .sidebar{
    position:absolute;
    width: 80%;
    background:#000;
    height: 100%;
    ul{
      div{
        li{
          display:flex;
          //justify-content:center;
          a{
            display:flex;
            align-items: center;
            text-decoration:none;
            color:#fff;   
            padding: 0.5rem;
            width: 100%;
            transition:0.3s;
            :hover{
              background:#333333;;
            }
            svg{
              color:#fff;
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
   }
  }
`
