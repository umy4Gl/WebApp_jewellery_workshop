import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const data = [
    {
        img: `jewellery.png`
    },
    {
        img: `jew_for_orders.png`
    }

];


const Carousel = ({ children }) => {
    const settings = {
        dots: true,
        infinite: true,
        variableWidth: true,
        speed: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className="slide" >
            <div>
                <Slider {...settings} >
                    {data.map((d) => (
                        <a className="card-wrapper" style={{ width: '13.33rem' }} href="*">
                            {children}
                        </a>
                    ))
                    }
                </Slider>
            </div >
        </div >
    );



};

export default Carousel;