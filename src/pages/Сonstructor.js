import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "../components/Button/Button";
import "./Constructor.css";


const Constructor = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ marginTop: '200px' }} >
            <Card style={{ maxWidth: 800, marginBottom: '50px', boxShadow: '0px 0px 50px gray'}} className="p-5" >
                <h1 className="text-align-center m-auto mb-5"> Создай украшение своей мечты</h1>
                <div className="d-flex mb-4 px-4">
                    <div>
                        <h3>1. Выберите тип украшения:</h3>
                        <Form.Select size="lg" style={{ width: 400 }} className="me-5">
                            <option>Типы украшений</option>
                            <option value="1">Кольцо</option>
                            <option value="2">Браслет</option>
                            <option value="3">Украшение на шею</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-4 px-4">
                    <div>
                        <h3>2. Выберите фурнитуру-основу:</h3>
                        <Form.Select size="lg" style={{ width: 400 }}>
                            <option>Фурнитуры-основы</option>
                            <option value="1">Цепочка панцирного плетения</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <img src={"jewellery.png"} className="cons" />
                </div>
                <div className="mb-4 px-4">
                    <h3>3. Введите размер:</h3>
                    <Form.Control style={{ width: 400 }} size="lg" className="mb-3" type="size" placeholder="Для цепочек введите длину в см" />
                </div>
                <div className="d-flex justify-content-between mb-4 px-4">
                    <div>
                        <h3>4. Выберите застежку:</h3>
                        <Form.Select size="lg" style={{ width: 400 }}>
                            <option>Застежки</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <img src={"jewellery.png"} className="cons" />
                </div>
                <div className="d-flex justify-content-between mb-4 px-4">
                    <div>
                        <h3>5. Выберите камень:</h3>
                        <div className="d-flex">
                            <Form.Select size="lg" style={{ width: 400 }}>
                            <option>Камни</option>
                            <option value="1">Обсидиан черный</option>
                            <option value="2">Розовый кварц</option>
                            <option value="3">Красный гранат</option>
                        </Form.Select>
                       <a href='<3' style={{ fontSize: '2rem', textDecoration: 'none', marginLeft: '15px'  }}>+</a>
                        </div>
                    </div>
                    <img src={"jewellery.png"} className="cons" />
                </div>
                <div className="d-flex  justify-content-center">
                <Button text="добавить в корзину" />
                </div>
            </Card>
        </Container>
    )

}

export default Constructor;