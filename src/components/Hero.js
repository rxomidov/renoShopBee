import React, {useState, useRef, useEffect} from 'react';
import './Hero.css';

export default function Hero({children, slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(()=>{
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };
        timeout.current = setTimeout(nextSlide,5000);
        return function () {
            if (timeout.current){
                clearTimeout(timeout.current);
            }
        }

    }, [current, length]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="hero">
            <div className="container">
                {slides.map((slide, index)=>(
                    <div className="hero-slide" key={index}>
                        {index === current && (
                            <div className="banner">
                                <img className="hero-image" src={slide.image} alt="alt"/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1>{slide.title}<br/><span>{slide.subtitle}</span></h1>
                                        <p>{slide.paragraph}</p>
                                        {children}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                ))}

            </div>
        </div>
    );
}
