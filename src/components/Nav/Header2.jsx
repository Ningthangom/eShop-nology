import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Search from '../Search/Search'


const Header2 = () => {


    return (
        <Navbar expand="lg" style={{ backgroundColor: "#184D47" }}>
            <Container>
                <Navbar.Brand href="/">
                    {" "}
                    <img
                        src="./ONE_LOGO.svg.png"
                        width="70px"
                        height="60px"
                    />{" "}
                    Stop{" "}
                </Navbar.Brand>
                <div style={{ marginLeft: "15vw", marginRight: "30vw" }}>
                    {" "}
                    <Search />
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Cart</Nav.Link>
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
