import React, { Component }  from 'react';
import axios from 'axios';
import '../App.css';

import { Jumbotron as Jumbo, Card, Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';



class Home extends Component {
    state = { }
    
    render() { 
        return ( 
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
         );
    }
}
 
export default Home;
