import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import myImg from '../assets/cosmic-sky.jpg';

const Styles = styled.div`

    .jumbo {
        
        background: url(${myImg}) no-repeat fixed bottom;
        background-size: cover;
        color: #fff;
        height: 250px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        
        background-color: #000;
        opacity: .6;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }

    h1, p {
        margin-left: 10px;
    }

`;

export const Jumbotron = () => (

    <Styles>
        <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        {/* <Container> */}
            <h1>The MERN Stack</h1>
            <p>Check out the 'Posts' page.</p>
            <p>You can participate by giving your post a title and a body, and then click submit.</p>
        {/* </Container> */}
        </Jumbo>
    </Styles>
)