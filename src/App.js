import './App.scss';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import data from "./data.json";

const App = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false
    };
    return (
        <div className="App">
            {/* <div className="carousel-container">
                {data.map((item, index) => (
                    <div key={index} id={index} className="carousel-item">
                        <img src={item.image} alt={item.description} />
                        <p>{item.details}</p>
                    </div>
                ))}
            </div> */}

            <div className="slick-container">
                <h2>React Slick Carousel Component</h2>
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={index} id={index}>
                            <img src={item.image} alt={item.description} />
                            <p>{item.details}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default App;
