import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Auth from '../pages/Auth';
import MainPage from '../pages/Main_page';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="shadow p-3 mb-5 bg-body-tertiary justify-content-center" fixed="top">
            <Container className="row row-cols-auto justify-content-between" fluid>
                <Col className='d-flex col-4 justify-content-left'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Row className="d-flex justify-content-between">
                            <Col>
                                <Nav.Link href="#link">Создай свой дизайн</Nav.Link>
                            </Col>
                            <Col>
                                <NavDropdown title="Каталог" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Украшения</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Компоненты для дизайна</NavDropdown.Item>
                                </NavDropdown>
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Col>
                <Col className='d-flex col-4 justify-content-center'>
                    <Nav.Link>
                        <svg alt='logo' width="78" height="90" viewBox="0 0 80 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 15.5979L78.5064 15.2901M9.27564 1.02831L24.1318 15.5054L40.4744 1.45725L58.3149 15.2901L70.3709 1M40.3494 62L1.05103 15.4772L9.25628 1.00822H70.3629L79 15.2579L40.3494 62ZM40.354 59.9042L24.1318 15.5209L58.3036 15.2901L40.354 59.9042Z" stroke="black" strokeWidth="0.744545" />
                        </svg>
                    </Nav.Link>
                </Col>
                <Col className='d-flex col-4 justify-content-end'>
                    <Row className="d-flex gx-5">
                        <Col className='d-flex col-6'>
                            <Nav.Link>
                                <svg width="104" height="86" viewBox="0 0 104 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.4507 76.64C19.4907 76.64 19.5107 76.7 19.5107 76.82C19.5107 76.94 19.4907 77 19.4507 77H15.6707C15.3907 77 15.1407 76.93 14.9207 76.79C14.7207 76.63 14.3807 76.23 13.9007 75.59C13.4207 74.95 12.5607 73.74 11.3207 71.96C10.3407 70.56 9.63074 69.59 9.19074 69.05C8.75074 68.51 8.30074 68.13 7.84074 67.91C7.38074 67.67 6.76074 67.55 5.98074 67.55C5.80074 67.55 5.67074 67.56 5.59074 67.58V74.57C5.59074 75.17 5.65074 75.62 5.77074 75.92C5.91074 76.2 6.15074 76.39 6.49074 76.49C6.85074 76.59 7.42074 76.64 8.20074 76.64C8.24074 76.64 8.26074 76.7 8.26074 76.82C8.26074 76.94 8.24074 77 8.20074 77C7.58074 77 7.09074 76.99 6.73074 76.97L4.57074 76.94L2.53074 76.97C2.17074 76.99 1.67074 77 1.03074 77C0.990742 77 0.970742 76.94 0.970742 76.82C0.970742 76.7 0.990742 76.64 1.03074 76.64C1.79074 76.64 2.35074 76.59 2.71074 76.49C3.07074 76.39 3.31074 76.2 3.43074 75.92C3.57074 75.62 3.64074 75.17 3.64074 74.57V60.68C3.64074 60.08 3.58074 59.64 3.46074 59.36C3.34074 59.08 3.10074 58.89 2.74074 58.79C2.38074 58.67 1.82074 58.61 1.06074 58.61C1.02074 58.61 1.00074 58.55 1.00074 58.43C1.00074 58.31 1.02074 58.25 1.06074 58.25L2.53074 58.28C3.37074 58.32 4.05074 58.34 4.57074 58.34C5.15074 58.34 5.88074 58.32 6.76074 58.28L8.20074 58.25C8.24074 58.25 8.26074 58.31 8.26074 58.43C8.26074 58.55 8.24074 58.61 8.20074 58.61C7.44074 58.61 6.88074 58.67 6.52074 58.79C6.16074 58.91 5.91074 59.12 5.77074 59.42C5.65074 59.7 5.59074 60.14 5.59074 60.74V67.07C6.67074 67.03 7.34074 67.01 7.60074 67.01H8.17074L11.8007 61.94C12.7007 60.7 13.1507 59.84 13.1507 59.36C13.1507 59.1 13.0207 58.91 12.7607 58.79C12.5207 58.67 12.1407 58.61 11.6207 58.61C11.5807 58.61 11.5607 58.55 11.5607 58.43C11.5607 58.31 11.5807 58.25 11.6207 58.25L12.9107 58.28C13.6707 58.32 14.3807 58.34 15.0407 58.34C15.7207 58.34 16.4207 58.32 17.1407 58.28L18.2207 58.25C18.2807 58.25 18.3107 58.31 18.3107 58.43C18.3107 58.55 18.2807 58.61 18.2207 58.61C17.1807 58.61 16.2607 58.87 15.4607 59.39C14.6607 59.89 13.8007 60.75 12.8807 61.97L8.86074 67.1C9.34074 67.18 9.75074 67.34 10.0907 67.58C10.4507 67.82 10.8107 68.16 11.1707 68.6C11.5307 69.02 12.0607 69.73 12.7607 70.73L13.2107 71.36C14.1507 72.68 14.9107 73.69 15.4907 74.39C16.0707 75.09 16.6807 75.64 17.3207 76.04C17.9607 76.42 18.6707 76.62 19.4507 76.64ZM25.8372 77.39C24.6772 77.39 23.6472 77.11 22.7472 76.55C21.8672 75.97 21.1872 75.2 20.7072 74.24C20.2272 73.26 19.9872 72.2 19.9872 71.06C19.9872 69.76 20.2972 68.66 20.9172 67.76C21.5572 66.84 22.3672 66.16 23.3472 65.72C24.3472 65.26 25.3572 65.03 26.3772 65.03C27.5572 65.03 28.5872 65.32 29.4672 65.9C30.3472 66.48 31.0172 67.25 31.4772 68.21C31.9572 69.15 32.1972 70.15 32.1972 71.21C32.1972 72.45 31.9072 73.54 31.3272 74.48C30.7472 75.4 29.9672 76.12 28.9872 76.64C28.0272 77.14 26.9772 77.39 25.8372 77.39ZM26.7072 76.82C27.8072 76.82 28.6572 76.43 29.2572 75.65C29.8572 74.87 30.1572 73.67 30.1572 72.05C30.1572 70.81 29.9472 69.7 29.5272 68.72C29.1272 67.74 28.5672 66.98 27.8472 66.44C27.1272 65.88 26.3072 65.6 25.3872 65.6C24.3072 65.6 23.4672 65.99 22.8672 66.77C22.2872 67.55 21.9972 68.67 21.9972 70.13C21.9972 71.35 22.1972 72.47 22.5972 73.49C22.9972 74.51 23.5572 75.32 24.2772 75.92C24.9972 76.52 25.8072 76.82 26.7072 76.82ZM42.6827 65.03C43.5027 65.03 44.2627 65.25 44.9627 65.69C45.6627 66.13 46.2227 66.77 46.6427 67.61C47.0627 68.45 47.2727 69.43 47.2727 70.55C47.2727 72.05 46.9327 73.32 46.2527 74.36C45.5727 75.38 44.7327 76.14 43.7327 76.64C42.7527 77.14 41.7827 77.39 40.8227 77.39C40.1827 77.39 39.6227 77.33 39.1427 77.21C38.6627 77.11 38.1627 76.91 37.6427 76.61V82.82C37.6427 83.42 37.7127 83.86 37.8527 84.14C38.0127 84.42 38.3027 84.61 38.7227 84.71C39.1427 84.83 39.7827 84.89 40.6427 84.89C40.7027 84.89 40.7327 84.95 40.7327 85.07C40.7327 85.19 40.7027 85.25 40.6427 85.25C39.9427 85.25 39.3927 85.24 38.9927 85.22L36.8027 85.19L35.0327 85.22C34.7327 85.24 34.3127 85.25 33.7727 85.25C33.7127 85.25 33.6827 85.19 33.6827 85.07C33.6827 84.95 33.7127 84.89 33.7727 84.89C34.4127 84.89 34.8827 84.83 35.1827 84.71C35.4827 84.61 35.6827 84.42 35.7827 84.14C35.9027 83.86 35.9627 83.42 35.9627 82.82V67.85C35.9627 67.27 35.8927 66.84 35.7527 66.56C35.6127 66.26 35.3627 66.06 35.0027 65.96C34.6627 65.84 34.1427 65.78 33.4427 65.78C33.3827 65.78 33.3527 65.72 33.3527 65.6C33.3527 65.48 33.3827 65.42 33.4427 65.42H37.0727C37.3127 65.42 37.4627 65.47 37.5227 65.57C37.6027 65.67 37.6427 65.88 37.6427 66.2V67.61C38.5027 66.73 39.3427 66.08 40.1627 65.66C40.9827 65.24 41.8227 65.03 42.6827 65.03ZM41.7227 76.76C42.7827 76.76 43.6527 76.29 44.3327 75.35C45.0127 74.41 45.3527 73.12 45.3527 71.48C45.3527 69.8 44.9827 68.5 44.2427 67.58C43.5027 66.64 42.5527 66.17 41.3927 66.17C40.6927 66.17 40.0427 66.34 39.4427 66.68C38.8427 67.02 38.2427 67.51 37.6427 68.15V74.84C38.1827 75.46 38.7627 75.94 39.3827 76.28C40.0227 76.6 40.8027 76.76 41.7227 76.76ZM55.0392 70.52C56.0992 70.62 56.9192 70.98 57.4992 71.6C58.0992 72.22 58.3992 72.97 58.3992 73.85C58.3992 74.93 57.9492 75.79 57.0492 76.43C56.1492 77.05 55.0192 77.36 53.6592 77.36C53.0192 77.36 52.3892 77.29 51.7692 77.15C51.1692 77.01 50.6492 76.83 50.2092 76.61C50.0692 76.55 49.9792 76.49 49.9392 76.43C49.8992 76.37 49.8692 76.26 49.8492 76.1L49.6092 73.61C49.6092 73.55 49.6592 73.51 49.7592 73.49C49.8792 73.47 49.9492 73.5 49.9692 73.58C50.2492 74.62 50.7292 75.44 51.4092 76.04C52.0892 76.62 52.8892 76.91 53.8092 76.91C54.6692 76.91 55.3092 76.66 55.7292 76.16C56.1492 75.66 56.3592 74.98 56.3592 74.12C56.3592 73.1 56.0592 72.3 55.4592 71.72C54.8792 71.14 53.9492 70.85 52.6692 70.85C52.5692 70.85 52.5192 70.8 52.5192 70.7C52.5192 70.58 52.5692 70.52 52.6692 70.52C53.8292 70.52 54.6592 70.32 55.1592 69.92C55.6792 69.52 55.9392 68.95 55.9392 68.21C55.9392 66.49 55.1692 65.63 53.6292 65.63C52.8092 65.63 52.1392 65.88 51.6192 66.38C51.0992 66.86 50.6592 67.59 50.2992 68.57C50.2992 68.59 50.2592 68.6 50.1792 68.6C49.9992 68.6 49.9192 68.57 49.9392 68.51L50.6892 64.79C50.6892 64.75 50.7292 64.73 50.8092 64.73C50.8692 64.73 50.9292 64.75 50.9892 64.79C51.0492 64.81 51.0692 64.83 51.0492 64.85C51.0292 64.91 51.0192 65 51.0192 65.12C51.0192 65.46 51.1792 65.63 51.4992 65.63C51.6992 65.63 51.9692 65.56 52.3092 65.42C52.7692 65.28 53.1392 65.18 53.4192 65.12C53.7192 65.06 54.0792 65.03 54.4992 65.03C55.5592 65.03 56.3792 65.28 56.9592 65.78C57.5392 66.26 57.8292 66.86 57.8292 67.58C57.8292 68.22 57.5792 68.81 57.0792 69.35C56.5792 69.87 55.8992 70.26 55.0392 70.52ZM74.0334 76.64C74.0734 76.64 74.0934 76.7 74.0934 76.82C74.0934 76.94 74.0734 77 74.0334 77C73.5134 77 73.1034 76.99 72.8034 76.97L71.3034 76.94L69.6834 76.97C69.4034 76.99 69.0134 77 68.5134 77C68.4534 77 68.4234 76.94 68.4234 76.82C68.4234 76.7 68.4534 76.64 68.5134 76.64C69.0734 76.64 69.4834 76.59 69.7434 76.49C70.0034 76.39 70.1834 76.2 70.2834 75.92C70.3834 75.62 70.4334 75.17 70.4334 74.57V68.39L64.0434 74.81C64.0634 75.33 64.1234 75.72 64.2234 75.98C64.3234 76.24 64.5034 76.42 64.7634 76.52C65.0234 76.6 65.4234 76.64 65.9634 76.64C66.0034 76.64 66.0234 76.7 66.0234 76.82C66.0234 76.94 66.0034 77 65.9634 77C65.4434 77 65.0334 76.99 64.7334 76.97L63.2334 76.94L61.6434 76.97C61.3634 76.99 60.9634 77 60.4434 77C60.3834 77 60.3534 76.94 60.3534 76.82C60.3534 76.7 60.3834 76.64 60.4434 76.64C61.0034 76.64 61.4134 76.59 61.6734 76.49C61.9534 76.39 62.1334 76.2 62.2134 75.92C62.3134 75.62 62.3634 75.17 62.3634 74.57V67.85C62.3634 67.25 62.3134 66.81 62.2134 66.53C62.1334 66.23 61.9634 66.03 61.7034 65.93C61.4434 65.83 61.0334 65.78 60.4734 65.78C60.4134 65.78 60.3834 65.72 60.3834 65.6C60.3834 65.48 60.4134 65.42 60.4734 65.42C60.9734 65.42 61.3634 65.43 61.6434 65.45L63.2334 65.48L64.7634 65.45C65.0634 65.43 65.4634 65.42 65.9634 65.42C66.0034 65.42 66.0234 65.48 66.0234 65.6C66.0234 65.72 66.0034 65.78 65.9634 65.78C65.4034 65.78 64.9834 65.84 64.7034 65.96C64.4434 66.08 64.2634 66.29 64.1634 66.59C64.0834 66.87 64.0434 67.31 64.0434 67.91V73.97L70.4334 67.55C70.4134 66.81 70.2834 66.33 70.0434 66.11C69.8034 65.89 69.3034 65.78 68.5434 65.78C68.4834 65.78 68.4534 65.72 68.4534 65.6C68.4534 65.48 68.4834 65.42 68.5434 65.42C69.0434 65.42 69.4334 65.43 69.7134 65.45L71.3034 65.48L72.8334 65.45C73.1334 65.43 73.5334 65.42 74.0334 65.42C74.0734 65.42 74.0934 65.48 74.0934 65.6C74.0934 65.72 74.0734 65.78 74.0334 65.78C73.4734 65.78 73.0534 65.84 72.7734 65.96C72.5134 66.08 72.3334 66.29 72.2334 66.59C72.1534 66.87 72.1134 67.31 72.1134 67.91V74.57C72.1134 75.17 72.1534 75.62 72.2334 75.92C72.3334 76.2 72.5134 76.39 72.7734 76.49C73.0534 76.59 73.4734 76.64 74.0334 76.64ZM89.5021 76.64C89.5421 76.64 89.5621 76.7 89.5621 76.82C89.5621 76.94 89.5421 77 89.5021 77C88.9821 77 88.5721 76.99 88.2721 76.97L86.7721 76.94L85.1521 76.97C84.8721 76.99 84.4821 77 83.9821 77C83.9221 77 83.8921 76.94 83.8921 76.82C83.8921 76.7 83.9221 76.64 83.9821 76.64C84.5421 76.64 84.9521 76.59 85.2121 76.49C85.4721 76.39 85.6521 76.2 85.7521 75.92C85.8521 75.62 85.9021 75.17 85.9021 74.57V71.51H79.5121V74.57C79.5121 75.17 79.5521 75.62 79.6321 75.92C79.7321 76.2 79.9121 76.39 80.1721 76.49C80.4521 76.59 80.8721 76.64 81.4321 76.64C81.4721 76.64 81.4921 76.7 81.4921 76.82C81.4921 76.94 81.4721 77 81.4321 77C80.9121 77 80.5021 76.99 80.2021 76.97L78.7021 76.94L77.1121 76.97C76.8321 76.99 76.4321 77 75.9121 77C75.8521 77 75.8221 76.94 75.8221 76.82C75.8221 76.7 75.8521 76.64 75.9121 76.64C76.4721 76.64 76.8821 76.59 77.1421 76.49C77.4221 76.39 77.6021 76.2 77.6821 75.92C77.7821 75.62 77.8321 75.17 77.8321 74.57V67.85C77.8321 67.25 77.7821 66.81 77.6821 66.53C77.6021 66.23 77.4321 66.03 77.1721 65.93C76.9121 65.83 76.5021 65.78 75.9421 65.78C75.8821 65.78 75.8521 65.72 75.8521 65.6C75.8521 65.48 75.8821 65.42 75.9421 65.42C76.4421 65.42 76.8321 65.43 77.1121 65.45L78.7021 65.48L80.2321 65.45C80.5321 65.43 80.9321 65.42 81.4321 65.42C81.4721 65.42 81.4921 65.48 81.4921 65.6C81.4921 65.72 81.4721 65.78 81.4321 65.78C80.8721 65.78 80.4521 65.84 80.1721 65.96C79.9121 66.08 79.7321 66.29 79.6321 66.59C79.5521 66.87 79.5121 67.31 79.5121 67.91V70.91H85.9021V67.85C85.9021 67.25 85.8521 66.81 85.7521 66.53C85.6721 66.23 85.5021 66.03 85.2421 65.93C84.9821 65.83 84.5721 65.78 84.0121 65.78C83.9521 65.78 83.9221 65.72 83.9221 65.6C83.9221 65.48 83.9521 65.42 84.0121 65.42C84.5121 65.42 84.9021 65.43 85.1821 65.45L86.7721 65.48L88.3021 65.45C88.6021 65.43 89.0021 65.42 89.5021 65.42C89.5421 65.42 89.5621 65.48 89.5621 65.6C89.5621 65.72 89.5421 65.78 89.5021 65.78C88.9421 65.78 88.5221 65.84 88.2421 65.96C87.9821 66.08 87.8021 66.29 87.7021 66.59C87.6221 66.87 87.5821 67.31 87.5821 67.91V74.57C87.5821 75.17 87.6221 75.62 87.7021 75.92C87.8021 76.2 87.9821 76.39 88.2421 76.49C88.5221 76.59 88.9421 76.64 89.5021 76.64ZM102.871 75.38C102.951 75.38 103.001 75.43 103.021 75.53C103.041 75.61 103.011 75.67 102.931 75.71L99.8409 77.18C99.7609 77.22 99.6809 77.24 99.6009 77.24C99.3409 77.24 99.1109 77.07 98.9109 76.73C98.7109 76.39 98.5809 75.92 98.5209 75.32L96.6609 76.31C96.0409 76.63 95.5309 76.86 95.1309 77C94.7309 77.14 94.3409 77.21 93.9609 77.21C93.3409 77.21 92.8609 77.05 92.5209 76.73C92.2009 76.39 92.0409 75.97 92.0409 75.47C92.0409 74.93 92.2409 74.5 92.6409 74.18C93.0609 73.84 93.8009 73.49 94.8609 73.13L98.4909 71.84V69.35C98.4909 68.03 98.3209 67.11 97.9809 66.59C97.6409 66.05 97.1709 65.78 96.5709 65.78C95.8909 65.78 95.3609 66.02 94.9809 66.5C94.6009 66.98 94.3709 67.56 94.2909 68.24C94.2109 69 93.8409 69.38 93.1809 69.38C92.8609 69.38 92.6109 69.3 92.4309 69.14C92.2509 68.98 92.1609 68.76 92.1609 68.48C92.1609 68.02 92.4609 67.53 93.0609 67.01C93.6609 66.49 94.3809 66.05 95.2209 65.69C96.0809 65.33 96.8509 65.15 97.5309 65.15C98.3309 65.15 98.9709 65.43 99.4509 65.99C99.9309 66.53 100.171 67.35 100.171 68.45V73.76C100.171 74.46 100.261 74.97 100.441 75.29C100.621 75.61 100.921 75.77 101.341 75.77C101.721 75.77 102.211 75.64 102.811 75.38H102.871ZM98.4909 74.9V74.72V72.2L95.4009 73.37C94.9409 73.55 94.6109 73.75 94.4109 73.97C94.2309 74.19 94.1409 74.47 94.1409 74.81C94.1409 75.23 94.2609 75.56 94.5009 75.8C94.7409 76.02 95.0509 76.13 95.4309 76.13C95.8109 76.13 96.2209 76.03 96.6609 75.83L98.4909 74.9Z" fill="black" />
                                    <g clipPath="url(#clip0_118_9)">
                                        <path d="M36.0339 52.5C38.9123 52.5 41.2458 50.2614 41.2458 47.5C41.2458 44.7386 38.9123 42.5 36.0339 42.5C33.1555 42.5 30.822 44.7386 30.822 47.5C30.822 50.2614 33.1555 52.5 36.0339 52.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M64.6992 52.5C67.5776 52.5 69.911 50.2614 69.911 47.5C69.911 44.7386 67.5776 42.5 64.6992 42.5C61.8207 42.5 59.4873 44.7386 59.4873 47.5C59.4873 50.2614 61.8207 52.5 64.6992 52.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M64.6991 42.5H36.0339V7.5H30.822" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M36.0339 12.5L72.517 15L69.9111 32.5H36.0339" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_118_9">
                                            <rect width="62.5424" height="60" fill="white" transform="translate(20.3983)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Nav.Link>
                        </Col>
                        <Col className='d-flex col-6'>
                            <Nav.Link>
                                <svg className='enter' width="75" height="85" viewBox="0 0 75 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0186 66.44C11.5986 66.56 12.8686 67.09 13.8286 68.03C14.8086 68.95 15.2986 70.1 15.2986 71.48C15.2986 72.54 15.0386 73.5 14.5186 74.36C13.9986 75.22 13.2786 75.9 12.3586 76.4C11.4586 76.88 10.4486 77.12 9.32859 77.12C8.66859 77.12 7.94859 77.09 7.16859 77.03C6.88859 77.01 6.55859 76.99 6.17859 76.97C5.79859 76.95 5.37859 76.94 4.91859 76.94L2.87859 76.97C2.51859 76.99 2.00859 77 1.34859 77C1.30859 77 1.28859 76.94 1.28859 76.82C1.28859 76.7 1.30859 76.64 1.34859 76.64C2.10859 76.64 2.66859 76.59 3.02859 76.49C3.38859 76.37 3.63859 76.17 3.77859 75.89C3.91859 75.61 3.98859 75.17 3.98859 74.57V60.68C3.98859 60.08 3.91859 59.64 3.77859 59.36C3.65859 59.08 3.41859 58.89 3.05859 58.79C2.69859 58.67 2.14859 58.61 1.40859 58.61C1.34859 58.61 1.31859 58.55 1.31859 58.43C1.31859 58.31 1.34859 58.25 1.40859 58.25L2.87859 58.28C3.71859 58.32 4.39859 58.34 4.91859 58.34C5.27859 58.34 5.60859 58.33 5.90859 58.31C6.22859 58.29 6.49859 58.27 6.71859 58.25C7.33859 58.19 7.91859 58.16 8.45859 58.16C10.1386 58.16 11.3986 58.53 12.2386 59.27C13.0786 59.99 13.4986 60.94 13.4986 62.12C13.4986 63.08 13.1886 63.94 12.5686 64.7C11.9486 65.44 11.0986 66.02 10.0186 66.44ZM7.79859 58.61C7.27859 58.61 6.88859 58.65 6.62859 58.73C6.38859 58.81 6.20859 59 6.08859 59.3C5.96859 59.6 5.90859 60.08 5.90859 60.74V66.44L7.25859 66.47C8.71859 66.47 9.79859 66.1 10.4986 65.36C11.1986 64.6 11.5486 63.6 11.5486 62.36C11.5486 61.24 11.2386 60.34 10.6186 59.66C10.0186 58.96 9.07859 58.61 7.79859 58.61ZM8.87859 76.58C10.3386 76.58 11.4186 76.21 12.1186 75.47C12.8386 74.71 13.1986 73.63 13.1986 72.23C13.1986 70.71 12.7486 69.48 11.8486 68.54C10.9686 67.6 9.74859 67.12 8.18859 67.1C7.54859 67.08 6.78859 67.1 5.90859 67.16V74.57C5.90859 75.09 5.97859 75.49 6.11859 75.77C6.27859 76.05 6.56859 76.26 6.98859 76.4C7.42859 76.52 8.05859 76.58 8.87859 76.58ZM23.7171 77.39C22.5571 77.39 21.5271 77.11 20.6271 76.55C19.7471 75.97 19.0671 75.2 18.5871 74.24C18.1071 73.26 17.8671 72.2 17.8671 71.06C17.8671 69.76 18.1771 68.66 18.7971 67.76C19.4371 66.84 20.2471 66.16 21.2271 65.72C22.2271 65.26 23.2371 65.03 24.2571 65.03C25.4371 65.03 26.4671 65.32 27.3471 65.9C28.2271 66.48 28.8971 67.25 29.3571 68.21C29.8371 69.15 30.0771 70.15 30.0771 71.21C30.0771 72.45 29.7871 73.54 29.2071 74.48C28.6271 75.4 27.8471 76.12 26.8671 76.64C25.9071 77.14 24.8571 77.39 23.7171 77.39ZM24.5871 76.82C25.6871 76.82 26.5371 76.43 27.1371 75.65C27.7371 74.87 28.0371 73.67 28.0371 72.05C28.0371 70.81 27.8271 69.7 27.4071 68.72C27.0071 67.74 26.4471 66.98 25.7271 66.44C25.0071 65.88 24.1871 65.6 23.2671 65.6C22.1871 65.6 21.3471 65.99 20.7471 66.77C20.1671 67.55 19.8771 68.67 19.8771 70.13C19.8771 71.35 20.0771 72.47 20.4771 73.49C20.8771 74.51 21.4371 75.32 22.1571 75.92C22.8771 76.52 23.6871 76.82 24.5871 76.82ZM45.6926 76.64C45.7326 76.64 45.7526 76.7 45.7526 76.82C45.7526 76.94 45.7326 77 45.6926 77C45.1726 77 44.7626 76.99 44.4626 76.97L42.9626 76.94L41.3426 76.97C41.0626 76.99 40.6726 77 40.1726 77C40.1126 77 40.0826 76.94 40.0826 76.82C40.0826 76.7 40.1126 76.64 40.1726 76.64C40.7326 76.64 41.1426 76.59 41.4026 76.49C41.6626 76.39 41.8426 76.2 41.9426 75.92C42.0426 75.62 42.0926 75.17 42.0926 74.57V68.39L35.7026 74.81C35.7226 75.33 35.7826 75.72 35.8826 75.98C35.9826 76.24 36.1626 76.42 36.4226 76.52C36.6826 76.6 37.0826 76.64 37.6226 76.64C37.6626 76.64 37.6826 76.7 37.6826 76.82C37.6826 76.94 37.6626 77 37.6226 77C37.1026 77 36.6926 76.99 36.3926 76.97L34.8926 76.94L33.3026 76.97C33.0226 76.99 32.6226 77 32.1026 77C32.0426 77 32.0126 76.94 32.0126 76.82C32.0126 76.7 32.0426 76.64 32.1026 76.64C32.6626 76.64 33.0726 76.59 33.3326 76.49C33.6126 76.39 33.7926 76.2 33.8726 75.92C33.9726 75.62 34.0226 75.17 34.0226 74.57V67.85C34.0226 67.25 33.9726 66.81 33.8726 66.53C33.7926 66.23 33.6226 66.03 33.3626 65.93C33.1026 65.83 32.6926 65.78 32.1326 65.78C32.0726 65.78 32.0426 65.72 32.0426 65.6C32.0426 65.48 32.0726 65.42 32.1326 65.42C32.6326 65.42 33.0226 65.43 33.3026 65.45L34.8926 65.48L36.4226 65.45C36.7226 65.43 37.1226 65.42 37.6226 65.42C37.6626 65.42 37.6826 65.48 37.6826 65.6C37.6826 65.72 37.6626 65.78 37.6226 65.78C37.0626 65.78 36.6426 65.84 36.3626 65.96C36.1026 66.08 35.9226 66.29 35.8226 66.59C35.7426 66.87 35.7026 67.31 35.7026 67.91V73.97L42.0926 67.55C42.0726 66.81 41.9426 66.33 41.7026 66.11C41.4626 65.89 40.9626 65.78 40.2026 65.78C40.1426 65.78 40.1126 65.72 40.1126 65.6C40.1126 65.48 40.1426 65.42 40.2026 65.42C40.7026 65.42 41.0926 65.43 41.3726 65.45L42.9626 65.48L44.4926 65.45C44.7926 65.43 45.1926 65.42 45.6926 65.42C45.7326 65.42 45.7526 65.48 45.7526 65.6C45.7526 65.72 45.7326 65.78 45.6926 65.78C45.1326 65.78 44.7126 65.84 44.4326 65.96C44.1726 66.08 43.9926 66.29 43.8926 66.59C43.8126 66.87 43.7726 67.31 43.7726 67.91V74.57C43.7726 75.17 43.8126 75.62 43.8926 75.92C43.9926 76.2 44.1726 76.39 44.4326 76.49C44.7126 76.59 45.1326 76.64 45.6926 76.64ZM38.9126 62.66C39.5126 62.66 39.9426 62.5 40.2026 62.18C40.4626 61.86 40.6526 61.42 40.7726 60.86C40.8926 60.38 41.0226 60.02 41.1626 59.78C41.3226 59.54 41.5826 59.42 41.9426 59.42C42.5426 59.42 42.8426 59.72 42.8426 60.32C42.8426 60.8 42.6526 61.25 42.2726 61.67C41.9126 62.09 41.4326 62.43 40.8326 62.69C40.2326 62.93 39.6026 63.05 38.9426 63.05C38.2626 63.05 37.6226 62.92 37.0226 62.66C36.4226 62.4 35.9426 62.06 35.5826 61.64C35.2226 61.2 35.0426 60.75 35.0426 60.29C35.0426 59.71 35.3326 59.42 35.9126 59.42C36.2926 59.42 36.5526 59.53 36.6926 59.75C36.8326 59.97 36.9726 60.34 37.1126 60.86C37.2126 61.28 37.3026 61.6 37.3826 61.82C37.4826 62.04 37.6526 62.24 37.8926 62.42C38.1326 62.58 38.4726 62.66 38.9126 62.66ZM50.2713 77C50.2313 77 50.2113 76.94 50.2113 76.82C50.2113 76.7 50.2313 76.64 50.2713 76.64C50.8313 76.64 51.2413 76.59 51.5013 76.49C51.7813 76.39 51.9613 76.2 52.0413 75.92C52.1413 75.62 52.1913 75.17 52.1913 74.57V67.91C52.1913 67.09 52.1013 66.55 51.9213 66.29C51.7413 66.01 51.3513 65.87 50.7513 65.87C49.8513 65.87 49.1913 66.14 48.7713 66.68C48.3513 67.22 48.1213 68.1 48.0813 69.32C48.0813 69.36 48.0213 69.38 47.9013 69.38C47.8013 69.38 47.7513 69.36 47.7513 69.32L47.6913 67.52C47.6713 67.3 47.6513 67.04 47.6313 66.74C47.6113 66.42 47.6013 66.06 47.6013 65.66C47.6013 65.54 47.6113 65.47 47.6313 65.45C47.6513 65.41 47.7213 65.39 47.8413 65.39C48.2613 65.39 48.6313 65.4 48.9513 65.42L52.9713 65.45L57.0813 65.42C57.4213 65.4 57.8013 65.39 58.2213 65.39C58.3613 65.39 58.4413 65.41 58.4613 65.45C58.4813 65.47 58.4913 65.54 58.4913 65.66C58.3913 67.66 58.3413 68.88 58.3413 69.32C58.3413 69.36 58.2813 69.38 58.1613 69.38C58.0613 69.38 58.0013 69.36 57.9813 69.32C57.9413 68.1 57.7113 67.22 57.2913 66.68C56.8713 66.14 56.2213 65.87 55.3413 65.87C54.7413 65.87 54.3513 66.01 54.1713 66.29C53.9913 66.55 53.9013 67.09 53.9013 67.91V74.57C53.9013 75.17 53.9413 75.62 54.0213 75.92C54.1213 76.2 54.3013 76.39 54.5613 76.49C54.8213 76.59 55.2313 76.64 55.7913 76.64C55.8513 76.64 55.8813 76.7 55.8813 76.82C55.8813 76.94 55.8513 77 55.7913 77C55.2913 77 54.9013 76.99 54.6213 76.97L53.0613 76.94L51.5313 76.97C51.2313 76.99 50.8113 77 50.2713 77ZM74.0227 76.64C74.0627 76.64 74.0827 76.7 74.0827 76.82C74.0827 76.94 74.0627 77 74.0227 77C73.5027 77 73.0927 76.99 72.7927 76.97L71.2927 76.94L69.6727 76.97C69.3927 76.99 69.0027 77 68.5027 77C68.4427 77 68.4127 76.94 68.4127 76.82C68.4127 76.7 68.4427 76.64 68.5027 76.64C69.0627 76.64 69.4727 76.59 69.7327 76.49C69.9927 76.39 70.1727 76.2 70.2727 75.92C70.3727 75.62 70.4227 75.17 70.4227 74.57V68.39L64.0327 74.81C64.0527 75.33 64.1127 75.72 64.2127 75.98C64.3127 76.24 64.4927 76.42 64.7527 76.52C65.0127 76.6 65.4127 76.64 65.9527 76.64C65.9927 76.64 66.0127 76.7 66.0127 76.82C66.0127 76.94 65.9927 77 65.9527 77C65.4327 77 65.0227 76.99 64.7227 76.97L63.2227 76.94L61.6327 76.97C61.3527 76.99 60.9527 77 60.4327 77C60.3727 77 60.3427 76.94 60.3427 76.82C60.3427 76.7 60.3727 76.64 60.4327 76.64C60.9927 76.64 61.4027 76.59 61.6627 76.49C61.9427 76.39 62.1227 76.2 62.2027 75.92C62.3027 75.62 62.3527 75.17 62.3527 74.57V67.85C62.3527 67.25 62.3027 66.81 62.2027 66.53C62.1227 66.23 61.9527 66.03 61.6927 65.93C61.4327 65.83 61.0227 65.78 60.4627 65.78C60.4027 65.78 60.3727 65.72 60.3727 65.6C60.3727 65.48 60.4027 65.42 60.4627 65.42C60.9627 65.42 61.3527 65.43 61.6327 65.45L63.2227 65.48L64.7527 65.45C65.0527 65.43 65.4527 65.42 65.9527 65.42C65.9927 65.42 66.0127 65.48 66.0127 65.6C66.0127 65.72 65.9927 65.78 65.9527 65.78C65.3927 65.78 64.9727 65.84 64.6927 65.96C64.4327 66.08 64.2527 66.29 64.1527 66.59C64.0727 66.87 64.0327 67.31 64.0327 67.91V73.97L70.4227 67.55C70.4027 66.81 70.2727 66.33 70.0327 66.11C69.7927 65.89 69.2927 65.78 68.5327 65.78C68.4727 65.78 68.4427 65.72 68.4427 65.6C68.4427 65.48 68.4727 65.42 68.5327 65.42C69.0327 65.42 69.4227 65.43 69.7027 65.45L71.2927 65.48L72.8227 65.45C73.1227 65.43 73.5227 65.42 74.0227 65.42C74.0627 65.42 74.0827 65.48 74.0827 65.6C74.0827 65.72 74.0627 65.78 74.0227 65.78C73.4627 65.78 73.0427 65.84 72.7627 65.96C72.5027 66.08 72.3227 66.29 72.2227 66.59C72.1427 66.87 72.1027 67.31 72.1027 67.91V74.57C72.1027 75.17 72.1427 75.62 72.2227 75.92C72.3227 76.2 72.5027 76.39 72.7627 76.49C73.0427 76.59 73.4627 76.64 74.0227 76.64Z" fill="black" />
                                    <g clipPath="url(#clip0_97_2)">
                                        <path d="M39.1441 50.75C50.8839 50.75 60.4008 41.0122 60.4008 29C60.4008 16.9878 50.8839 7.25 39.1441 7.25C27.4043 7.25 17.8873 16.9878 17.8873 29C17.8873 41.0122 27.4043 50.75 39.1441 50.75Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M39.1441 31.4166C43.0574 31.4166 46.2297 28.1707 46.2297 24.1666C46.2297 20.1626 43.0574 16.9166 39.1441 16.9166C35.2309 16.9166 32.0585 20.1626 32.0585 24.1666C32.0585 28.1707 35.2309 31.4166 39.1441 31.4166Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25.3698 45.5517C25.9543 43.5609 27.1505 41.816 28.7809 40.5757C30.4112 39.3355 32.3888 38.666 34.4204 38.6666H43.8679C45.902 38.6659 47.8821 39.337 49.5136 40.5801C51.1451 41.8232 52.3409 43.5719 52.9232 45.5662" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_97_2">
                                            <rect width="56.6847" height="58" fill="white" transform="translate(10.8018)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Nav.Link>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </Navbar >
    );
};

export default NavBar;