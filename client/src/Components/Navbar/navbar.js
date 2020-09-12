import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import * as ReactBootStrap from "react-bootstrap";
import Home from "../pages/home"


function Navbar() {
    return (

        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
       
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.NavDropdown title="Explore" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href='https://vinepair.com/spirits-101/intro-bourbon-guide/'>Bourbon</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/brandy/">Brandy</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-gin-guide/">Gin</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-rum-guide/">Rum</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-tennessee-whiskey-guide/">Whiskey</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-scotch-guide/">Scotch</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-tequila-guide/">Tequila</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-vodka-guide/">Vodka</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>

                <ReactBootStrap.Nav>
<<<<<<< HEAD
                    <ReactBootStrap.Nav.Link href="./LoginButton.js">Log In/Register</ReactBootStrap.Nav.Link>
                    <LoginButton/>
                    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                        Dank memes
        </ReactBootStrap.Nav.Link>
=======
                    <ReactBootStrap.Nav.Link href="./">Log In</ReactBootStrap.Nav.Link>
>>>>>>> 901be0b8c12ac9598b419587896a52ea9ac328a1
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )

}

export default Navbar;
