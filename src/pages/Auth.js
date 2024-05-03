import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "../components/Button/Button";

const Auth = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className="mt-5 p-5">
                {/* <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2> */}
                <h2 className="m-auto mb-4">Авторизация</h2>
                <Form className="d-flex flex-column"></Form>
                <Form.Control className="mb-3" type="email" placeholder="Введите email" />
                <Form.Control className="mb-3" type="password" placeholder="Введите пароль" />
                <div className="mt-4 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <h4 style={{ marginBlockEnd: '0px' }}>Нет аккаунта? </h4>
                        <a style={{ color: 'blue', border: 'none', background: 'none', textDecoration: 'none' }} href='*'> Регистрируйся!</a>
                    </div>
                    <Button text='Войти' />
                </div>

            </Card>

        </Container>
    );
};

export default Auth;