import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer";
import Products from "./pages/Products";

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
        </Switch>
        <Footer/>
    </Router>
}
