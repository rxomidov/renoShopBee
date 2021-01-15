import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import WishList from "./pages/WishList";
import Desktop from "./components/Products/Desktop";
import Laptop from "./components/Products/Laptop";
import Phone from "./components/Products/Phone";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return <Router>
        <Header isOpen={isOpen} toggle={toggle}/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/products">
                <Products/>
            </Route>
            <Route path="/products/:id">
                <ProductDetails/>
            </Route>
            <Route  path="/desktop">
                <Desktop/>
            </Route>
            <Route  path="/laptop">
                <Laptop/>
            </Route>
            <Route  path="/phone">
                <Phone/>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
            <Route path="/wishlist">
                <WishList/>
            </Route>
            <Route path="*">
                <Error/>
            </Route>
        </Switch>
        <Footer/>
    </Router>
}
