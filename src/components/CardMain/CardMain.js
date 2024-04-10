import Card from 'react-bootstrap/Card';
import "./CardMain.css";


const CardMain = ({title}) => {
    return (
        <Card style={{width: '13.33rem', height: '15.83rem'}}>
            <Card.Img src={'jewellery.png'} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
            </Card.ImgOverlay>
        </Card>
    );
};

export default CardMain;