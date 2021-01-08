import React, {useState} from 'react';
import logo from '../assets/Renoshopbee.svg'
import {Link} from "react-router-dom";
import {
    FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaTelegram, FaFacebookF, FaLinkedin,
    FaCartPlus, FaSearch
} from "react-icons/all";
import './Header.css';

export default function Header(props) {
    const [icons] = useState([
        {id: 1, icon: <FaInstagram/>, link: "https://instagram.com"},
        {id: 2, icon: <FaTwitter/>, link: "https://twitter.com"},
        {id: 3, icon: <FaTelegram/>, link: "https://telegram.org"},
        {id: 4, icon: <FaFacebookF/>, link: "https://facebook.com"},
        {id: 5, icon: <FaLinkedin/>, link: "https://linkedin.com"},
    ]);

    return (
        <header className="header">
            <div className="header-top">
                <div className="header-top-left">
                    <div>
                        <FaPhoneAlt/>
                        +998 99 992 2817
                    </div>
                    <div>
                        <FaEnvelope/>
                        rixsitilloxomidov@gmail.com
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
                            <Link to="/women">Women</Link>
                        </li>
                        <li>
                            <Link to="/jewelery">Jewelery</Link>
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
                            <Link className="top-cart" to="/cart"><FaCartPlus/></Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
