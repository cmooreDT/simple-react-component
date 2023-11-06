import './Carousel.scss';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { Component} from 'react';
import Slider from 'react-slick'
import data from "./data.json";

export default class AppendDots extends Component {
    state = {
        activeSlide: 0,
        activeSlide2: 0
    };
    render(){
        const allCount = document.getElementsByClassName('slide-button').length;
        const currentImage = this.state.activeSlide + 1;
        const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
            <button
                {...props}
                className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
                }
                aria-hidden="true"
                aria-disabled={currentSlide === 0 ? true : false}
                type="button"
                aria-label="previous slide"
            >
                Previous
            </button>
        );
        const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
            <button
                {...props}
                className={
                    "slick-next slick-arrow" +
                    (currentSlide === slideCount - 1 ? " slick-disabled" : "")
                }
                aria-hidden="true"
                aria-disabled={currentSlide === slideCount - 1 ? true : false}
                type="button"
                aria-label="next slide"
            >
                Next
            </button>
        );
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            lazyLoad: false,
            prevArrow: <SlickArrowLeft />,
            nextArrow: <SlickArrowRight />,
            beforeChange: (current, next) => {
                this.setState({ activeSlide: next });
            },
            afterChange: current => {
                this.setState({ activeSlide2: current });
            },
            customPaging: function(i) {
                return (
                    <button
                    className="slide-button"
                    id={`Navigate to slide-${i + 1}`}
                    aria-label={`${currentImage === i + 1 ? "Current" : "Show"} slide ${i + 1} of ${allCount}`}
                    aria-disabled={currentImage === i + 1 ? true : false}
                    aria-controls={i + 1}>
                        {i + 1}
                    </button>
                )
            }
        };
        return (
            <div className="App">
                <div className="slick-container">
                    <h2>React Slick Carousel Component</h2>
                    {/*
                    The following paragraphs are meant for debugging purposes
                    <p>
                        Kitten count {allCount}
                    </p>
                    <p>
                        Current kitten {currentImage}
                    </p>
                    */}
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} id={index + 1} aria-label={`Slide ${index + 1} of ${data.length}`} aria-labelledby={`slide-${index + 1}`} aria-current={this.state.activeSlide === index ? true : false}>
                                <img src={item.image} alt={item.description} />
                                <p>{item.details}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}