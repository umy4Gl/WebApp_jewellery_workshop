import Container from "react-bootstrap/esm/Container";
import Carousel from "../components/Carousel/Carousel";
import './Catalog.css';


const CatalogComp = () => {
  
    return (
      <Container fluid className="d-block justify-content-center">
        <h1>Компоненты для дизайна</h1>
        <Carousel header="Фурнитуры-основы">
  
        </Carousel>
  
        <Carousel header="Застежки">
  
        </Carousel>
  
        <Carousel header="Камни" className="mb-5">
  
        </Carousel>
      </Container>
    );
  
  }
  
  
  export default CatalogComp;
  