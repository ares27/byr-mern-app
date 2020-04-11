import React, { Component }  from 'react';
import axios from 'axios';
import '../App.css';

import { Jumbotron as Jumbo, Card, Button, Container } from 'react-bootstrap';



class Home extends Component {
    state = { }
    
    render() { 
        return ( 
            <Jumbo fluid className="app">                
                <Container>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>POST A COMMENT</Card.Title>
                        <Card.Text>
                        Support us by posting a comment about... just about anyting...
                        </Card.Text>
                        <Button variant="warning" href="/posts">POST</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">The MERN</Card.Footer>
                    </Card>
                </Container>
            </Jumbo>
         );
    }
}
 
export default Home;
