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
            // nextArrow: (
            //     <div aria-label="next slide">
            //     </div>
            // ),
            // prevArrow: (
            //     <div aria-label="previous slide">
            //     </div>
            // ),
            // appendDots: function(dots) {
            //     return (
            //         <div
            //         style={{
            //             backgroundColor: "#ddd",
            //             borderRadius: "10px",
            //             padding: "10px"
            //         }}
            //         aria-label={`${dots.length} slides total`}
            //         >
            //             <ul style={{ margin: "0px" }}>{dots}</ul>
            //         </div>
            //     )
            // },
            beforeChange: (current, next) => {
                this.setState({ activeSlide: next });
            },
            afterChange: current => {
                this.setState({ activeSlide2: current });
                // const pageCount = document.querySelector('.slick-dots ul')?.childElementCount;
                // console.log(`${current} / ${pageCount} `);
            },
            customPaging: function(i) {
                // const slideCount = document.querySelectorAll('.slick-dots ul li').length;
                return (
                    <button
                    className="slide-button"
                    // aria-label={`Slide ${i + 1} of ${slideCount}`}>
                    id={`slide-${i + 1}`}
                    aria-label={`Slide ${i + 1} of ${allCount}`}>
                        {i + 1}
                    </button>
                )
            }
        };
        return (
            <div className="App">
                <div className="slick-container">
                    <h2>React Slick Carousel Component</h2>
                    <p>
                        Slide count {allCount}
                    </p>
                    {/* <p>
                        BeforeChange =&gt; activeSlide: <strong>{this.state.activeSlide}</strong>
                    </p>
                    <p>
                        AfterChange =&gt; activeSlide: <strong>{this.state.activeSlide2}</strong>
                    </p> */}
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} id={index} aria-label={`Slide ${index + 1} of ${data.length}`}>
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