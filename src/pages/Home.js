import React from 'react';
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import {sliderData} from "../data/SliderData";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import SubscribeClients from "../components/SubscribeClients";
import Check from "../components/Products/Check";

export default function Home(props) {
    return (
        <>
            <Hero slides={sliderData}>
                <Link to="/products" className="btn-hero">Buy Now</Link>
            </Hero>
            <FeaturedProducts/>
            <SubscribeClients/>
            {/*<Check/>*/}
        </>
    );
}
