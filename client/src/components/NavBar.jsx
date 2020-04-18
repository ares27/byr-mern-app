import React from 'react';
import { Badge, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import zaFlag from '../assets/za-flag.png';


const Styles = styled.div`

    .navbar { 
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }  
    #za-img {
        width: 20px;
    }
`;

export const NavBar = () => (

    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                
                    {/* <img id="za-img" src={zaFlag}
                    className="mr-1"></img> */}
                
                Code Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" />
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/posts">Posts</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/match">Matches</Nav.Link></Nav.Item>
                    {/* <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item> */}
                </Nav>
        </Navbar>
    </Styles>
)