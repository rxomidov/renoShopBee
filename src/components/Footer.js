import React, {useState} from 'react';
import {FaFacebookF, FaInstagram, FaLinkedin, FaTelegram, FaTwitter,
    FaCcPaypal, FaCcVisa, FaAmazonPay, FaCcMastercard, FaCcAmex
} from "react-icons/all";
import './Footer.css';

export default function Footer(props) {
    const [icons] = useState([
        {id: 1, icon: <FaInstagram/>, link: "https://instagram.com"},
        {id: 2, icon: <FaTwitter/>, link: "https://twitter.com"},
        {id: 3, icon: <FaTelegram/>, link: "https://telegram.org"},
        {id: 4, icon: <FaFacebookF/>, link: "https://facebook.com"},
        {id: 5, icon: <FaLinkedin/>, link: "https://linkedin.com"},
    ]);

    const [fbicons] = useState([
        {id: 1, icon: <FaCcPaypal/>, link: "https://instagram.com"},
        {id: 2, icon: <FaAmazonPay/>, link: "https://twitter.com"},
        {id: 3, icon: <FaCcVisa/>, link: "https://telegram.org"},
        {id: 4, icon: <FaCcMastercard/>, link: "https://facebook.com"},
        {id: 5, icon: <FaCcAmex/>, link: "https://linkedin.com"},
    ]);

    return (
        <div className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-md-8">
                            We’re confident we’ve provided all the best for you. Stay conne
                        </div>
                        <div className="col-md-4">
                            {icons.map(icon => (
                                <a key={icon.id} href={icon.link}>{icon.icon}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    <h3>Information</h3>
                                    <p>Delivery Information</p>
                                    <p>Discount</p>
                                    <p>Sitemap</p>
                                    <p>Privacy Policy</p>
                                    <p>My Account</p>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <h3>My Account</h3>
                                    <p>Sign In</p>
                                    <p>View Cart</p>
                                    <p>MY Wishlist</p>
                                    <p>Check Out</p>
                                    <p>Track My Order</p>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <h3>Help</h3>
                                    <p>F.A.Q</p>
                                    <p>Shipping</p>
                                    <p>Sitemap</p>
                                    <p>Contact Us</p>
                                    <p>Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <h3>Contact Info</h3>
                            <p>Delivery Information</p>
                            <p>Discount</p>
                            <p>Sitemap</p>
                            <p>Privacy Policy</p>
                            <p>My Account</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row">
                    <div className="col-md-8">
                        <div className="copyright">
                            Copyright {new Date().getFullYear()} RenoshopBee all right reserved  -  Design by RX
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-bottom-icons">
                            {fbicons.map(icon => (
                                <a key={icon.id} href={icon.link}>{icon.icon}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}