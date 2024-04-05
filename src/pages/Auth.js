import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Auth = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className="p-5">
                {/* <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2> */}
                <Form className="d-flex flex-column"></Form>
                <Form.Control type="email" placeholder="Введите email"/>
                <Form.Control type="password" placeholder="Введите пароль"/>
        </Card>

        </Container>
    );
};

export default Auth;