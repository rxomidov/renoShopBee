import React from 'react';
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

export default function App() {
    return <Router>
        <Header/>
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
            <Route path="/cart">
                <Cart/>
            </Route>
            <Route path="*">
                <Error/>
            </Route>
        </Switch>
        <Footer/>
    </Router>
}
