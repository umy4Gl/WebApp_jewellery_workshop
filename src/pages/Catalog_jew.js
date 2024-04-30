import Container from "react-bootstrap/esm/Container";
// // import Carousel from "../components/Carousel/Carousel";
import './Catalog.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";


// const CatalogJew = () => {
//     const settings = {
//         dots: true,
//         infinite: true,

//         speed: 1,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//     };



//     // return (
//     //     <main>
//     //         <h1>Каталог</h1>
//     //         <div className="section d-flex justify-content-center ">
//     //             <h2>Браслеты</h2>
//     //             {/* <div className="slide" >
//     //                 <div className="slide"> */}
//     //                     <Slider {...settings} >
//     //                         {/* {data.map((d) => (
//     //                             <a className="card-wrapper" style={{ width: '13.33rem' }} href="*">
//     //                                 {data.map((d) => (
//     //                                     <img key={d.num} src={d.img} className="card-img" alt='' />
//     //                                 ))
//     //                                 }
//     //                             </a>
//     //                         ))
//     //                         } */}

//     //                     </Slider>
//     //                 {/* </div >
//     //             </div > */}
//     //         </div>
//     //     </main>
//     // );
// //};

// export default CatalogJew;

import React from "react";
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

function SimpleSlider() {
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
    <Container fluid className="d-block justify-content-center">
      <h1>Каталог</h1>
      <Container className="ch">
        <h2>Браслеты</h2>
        <div className="">
          <Slider {...settings}>
            {data.map((d) => (
              <a className="card-wrapper" href="*">
                <img key={d.num} src={d.img} className="card-img" alt='' />
              </a>
            ))}
          </Slider>
        </div>

      </Container>
    </Container>
  );

}


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "6%" }}
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
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
//}

export default SimpleSlider;
