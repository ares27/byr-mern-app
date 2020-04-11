import React, { Component } from 'react';
import axios from 'axios';
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
        padding: 30px 20px;
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

    p {
        font-size: 20px;
        
    }

`;

class Jumbotron extends Component {
    
    state = { quotes: null, randomQuote: [] }

    
    componentDidMount = () => {
        this.getQuotes();
    }

    //GET QUOTES
    getQuotes = () => {
        axios.get('https://type.fit/api/quotes')
         .then((response) => {
            const data = response.data;       
            //console.log("data: ", data);    

            //set quotes
            this.setState({ quotes: data });
        
            //randomise quote
            const randomNum = Math.floor(Math.random() * this.state.quotes.length);
            const randomQuote = this.state.quotes[randomNum];
            //console.log("randomQuote", randomQuote);

            //set random quote
            this.setState({ randomQuote: randomQuote });
         })
         .catch((err)=> {
            console.log("Could not get random quote: ", err);
            //this.setState({ errorMsg: err.message });
        });
    }

    render() { 
        return ( 
            <Styles>
                <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                    {/* <Container> */}
                    <p><h1>The MERN Stack</h1></p>
                    
                        <div>
                            { !this.state.randomQuote ? ( <div>Loading a random quote...</div> ) : 
                                ( 
                                    <div>
                                        <blockquote className="quote-card">
                                        <p>"{this.state.randomQuote.text}"</p>
                                        <p className="font-italic">- {this.state.randomQuote.author}</p>
                                        </blockquote>
                                    </div>   
                                )
                            }
                        </div>
                    
                    {/* </Container> */}
                </Jumbo>
            </Styles>
         );
    }
}
 
export default Jumbotron;

