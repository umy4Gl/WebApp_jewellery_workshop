import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/esm/Container";
import Slider from "react-slick";


const data = [
  {
    num: 1,
    img: `jewellery.png`
  },
  {
    num: 2,
    img: `jew_for_orders.png`
  },
  {
    num: 3,
    img: `aboba.png`
  },
  {
    num: 4,
    img: `pizda.png`
  },
  {
    num: 5,
    img: `car.png`
  }

];


const Carousel = ({header},{children}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  
  
  
    return (
        <Container className="ch mb-5">
          <h2>{header}</h2>
          <div className="">
            <Slider {...settings}>
              {data.map((d) => (
                // data = this
                <a className="card-wrapper" href="*">
                  {/* {children} */}
                  <img key={d.num} src={d.img} className="card-img" alt='' />
                </a>
              ))}
            </Slider>
          </div>
        </Container>
    );
  
  }
  
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "-2%" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

export default Carousel;