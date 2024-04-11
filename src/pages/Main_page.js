import Button from "../components/Button/Button";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import './Main_page.css';
import CardMain from "../components/CardMain/CardMain";



const MainPage = () => {
    return (
        <Container fluid>
            <Container className="hero-image flex-column" fluid>
                <h1>Cоздай украшение своей мечты</h1>
                <Button text='оформить заказ' />
            </Container>
            <Container className="section justify-content-center text-center" fluid>
                <p>«У каждого из нас море внутри, которым хочется поделиться со всеми.»</p>
                <p></p>
            </Container>
            <Container className="section order" fluid>
                <Image src={'jew_for_orders.png'} id="section" />
                <div className="flex-column text-center" id="section">
                    <p> Мы с радостью готовы воплотить все Ваши идеи, вложив в них максимум вдохновения и усердия.</p>
                    <p> С помощью конструктора для дизайна вы сможете создать уникальное украшение, которое Вам точно понравится. </p>
                    <Button text='оформить заказ' />
                    <Button text='к компонентам дизайна' />
                </div>
            </Container>
            <Container className="section ready flex-column justify-content-center" fluid>
                <h2>Готовые украшения</h2>
                <div>
                    <CardMain className="braslet" title="Браслеты" id="braslet">
                        <img src="" className="card-img" />
                    </CardMain>
                    <CardMain className="ring" title="Кольца" id="ring">
                        <img src="" className="card-img" />
                    </CardMain>
                    <CardMain className="neck" title="На шею" id="neck">
                        <img src="jewellery.png" className="card-img" />
                    </CardMain>
                </div>
            </Container>
        </Container>

    );
};

export default MainPage;
