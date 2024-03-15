import React from 'react'
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import './Styles.css'
import logo from './Logo/11.png'

const TopNavbar = () => {
    return (
        <>
            <Navbar key='lg' expand='lg' className="bg-body-tertiary navbar-fixed-top">
                <Container fluid>
                    <Navbar.Brand href="/"><img src={logo} style={{ height: "60px", width: "140px", paddingRight: "10px", marginLeft: "20px" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                VSN GRANITES
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-5">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/products">Products</Nav.Link>
                                <NavDropdown
                                    title="About"
                                    id={`offcanvasNavbarDropdown-expand-lg`}
                                    className="justify-content-end pe-5"
                                >
                                    <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                    <NavDropdown.Item href="/gallery">
                                        Gallery
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/serives">
                                        Services
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/contactus">
                                        Contact Us
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default TopNavbar
