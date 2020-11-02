import React from "react";
import Slider from "react-slick";
import SlideOne from "./cover.jpg";
import SlideTwo from "./cover1.jpg";
import SlideThree from './cover2.jpg';
import SlideFour from "./cover3.jpg";
import "./carousel.css";

const Carousel = () => {
        const settings = {
        dots: true,
        infinite:true,
        autoplay: true,
        speed: 500
    };
    return (
        <div className="carousel-wparrer">
        <Slider {...settings}>
            <div className="carousel-image"><img src={SlideOne} alt="cover" width="220px" height="340px"></img></div>
            <div className="carousel-image"><img src={SlideTwo} alt="cover" width="220px" height="340px"></img></div>
            <div className="carousel-image"><img src={SlideThree} alt="cover" width="220px" height="340px"></img></div>
            <div className="carousel-image"><img src={SlideFour} alt="cover" width="220px" height="340px"></img></div>
        </Slider>
        </div>
    )
}

export default Carousel;