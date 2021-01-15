import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {FaChevronLeft, FaChevronRight} from "react-icons/all";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <button className="next" onClick={onClick}><FaChevronRight/></button>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="prev" onClick={onClick}><FaChevronLeft/></button>
    );
}

export default function ProductSlider({image,image1,image2,image3}) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <SliderWrapper>
            <Slider {...settings}>
                <div className="slider-item">
                    <img src={image} alt="image"/>
                </div>
                <div className="slider-item">
                    <img src={image1} alt="image"/>
                </div>
                <div className="slider-item">
                    <img src={image2} alt="image"/>
                </div>
                <div className="slider-item">
                    <img src={image3} alt="image"/>
                </div>
            </Slider>
        </SliderWrapper>
    );
}

const SliderWrapper = styled.div`
  margin: 0 2rem;
  .slider-item{
    //background:#000;
    padding: 2rem 0;
    color:#fff;
    img{
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin: 0 auto;
    }
  }
  .next, .prev{
    background: #3cb878;
    border: none;
    padding: 2rem 0.5rem;
    color: #fff;
    position:absolute;
    z-index: 99;
    outline: none;
    transition: 0.3s;
    :hover{
      background:#2d8b5b;
    }
  }
  .next{
    right: -5%;
    top: 50%;
    transform: translateY(-50%);
  }
  .prev{
    left: -5%;
    top: 50%;
    transform: translateY(-50%);
  }
`