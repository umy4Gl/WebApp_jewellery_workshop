import Container from "react-bootstrap/esm/Container";
import Carousel from "../components/Carousel/Carousel";
import './Catalog.css';

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

const CatalogJew = () => {
  
  return (
    <Container fluid className="d-block justify-content-center">
      <h1>Каталог</h1>
      <Carousel header="Браслеты">

      </Carousel>

      <Carousel header="Кольца">

      </Carousel>

      <Carousel header="На шею" className="mb-5">

      </Carousel>
    </Container>
  );

}


export default CatalogJew;
