import React from 'react'
import { useState } from 'react'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'
import logo from '../assets/images/icon64MP.png'

function Navigation() {
        const[click, setClick] = useState(false)
    
        const handleClick = () => setClick(!click)
        const closeMobileMenu = () => setClick(false);
    
        const onMouseEnter = () => {
            if(window.innerWidth < 960) {
                setDropdown(false)
            } else {
                setDropdown(true)
            }
        };
    
        const onMouseLeave = () => {
            if(window.innerWidth < 960) {
                setDropdown(false)
            } else {
                setDropdown(false)
            }
        };
    

    return (
        <Navbar id="navbar" collapseOnSelect expand="lg" bg="" variant="dark">
            <Container>
            <Navbar.Brand href="#home" id="brand">
                <img
                alt=""
                src={logo}
                width="30"
                className="d-inline-block align-top"
                />{' '}
                Mindful Pose</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation