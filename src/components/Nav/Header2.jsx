import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from './ONE_LOGO.svg.png'
import Search from '../Search/Search';

import styles from './Header2.module.scss'


const Header2 = () => {


    return (
        <Navbar expand="lg" style={{ backgroundColor: "#184D47" }}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} width="70px" height="60px" alt="" />
                    Stop
                </Navbar.Brand>
                <div style={{ marginLeft: "15vw", marginRight: "20vw" }}>
                    <Search />
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={styles.cart}>
                            Cart
                        </Nav.Link>
                        <Nav.Link href="/favourites" className={styles.cart}>
                            favourites
                        </Nav.Link>
                        {/*   <Nav.Link href="#home" className={styles.cart}>
                            {" "}
                            Wish List{" "}
                        </Nav.Link>
                        <Nav.Link href="#home" className={styles.cart}>
                            {" "}
                            Log in{" "}
                        </Nav.Link> */}
                        <NavDropdown title="DashBoard" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products/new">
                                Add New Product
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Edit Product
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header2 ;
