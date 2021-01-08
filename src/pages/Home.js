import React from 'react';
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import {sliderData} from "../data/SliderData";

export default function Home(props) {
    return (
        <>
            <Hero slides={sliderData}>
                <Link to="/products" className="btn-hero">Buy Now</Link>
            </Hero>
        </>
    );
}
