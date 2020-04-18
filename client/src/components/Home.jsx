import React, { Component }  from 'react';
import axios from 'axios';
import '../App.css';

import { Jumbotron as Jumbo, Card, Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';



class Home extends Component {
    state = { }
    
    render() { 
        return ( 
            <React.Fragment>
            
            
            <Jumbo fluid className="app">                
                <Container>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>HELLO WORLD</Card.Title>
                        <Card.Text>
                        Support us by posting a comment about... just about anyting...
                        </Card.Text>
                        

                        <Row>
                            <Col>
                                <Button 
                                variant="primary" 
                                href="/posts"
                                className="homeBtns">POST</Button>
                                <Button 
                                variant="warning" 
                                href="/covid19news"
                                className="homeBtns">COVID-19</Button>
                            </Col>
                        </Row>
                        
                        
                    
                    
                    
                    
                    </Card.Body>
                    <Card.Footer className="text-muted">The MERN</Card.Footer>
                </Card>
                </Container>
            </Jumbo>
            
            
            <Jumbo fluid className="app">                
                <Container>
                <Card className="text-center">
                    <Card.Header>New Feature</Card.Header>
                    <Card.Body>
                        <Card.Title>GOOD GAMES</Card.Title>
                        <Card.Text>
                        Games we played during COVID-<span style={{color: 'red'}}>19</span> times.
                        </Card.Text>
                        

                        <Row>
                            <Col>
                                <Button 
                                variant="success" 
                                href="/match"
                                className="homeBtns">TENNIS</Button>
                            </Col>
                        </Row>
                        
                        
                    
                    
                    
                    
                    </Card.Body>
                    <Card.Footer className="text-muted">GAMES WE PLAYED.</Card.Footer>
                </Card>
                </Container>
            </Jumbo>
            
            
            </React.Fragment>
         );
    }
}
 
export default Home;
