import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
//import reactstrap components
import { Alert, Button } from "reactstrap";
import { Card, Container, Row, Col } from 'react-bootstrap';

//get images
import infectedImg from '../assets/sad.png';
import recoveredImg from '../assets/emoji.png';
import deathImg from '../assets/death.png';

class COVID19News extends Component {
    
    //contain form values
    state = { 
        title: '',
        cases: null,
        deaths: null,
        recovered: null
    };

    componentDidMount = () => {
        this.getData();
    }
      
    //GET BLOG POSTS
    getData = () => {
    axios.get('https://corona.lmao.ninja/countries/South Africa')
        .then((response) => {
            const data = response.data;       
            //this.setState({ posts: data });
            console.log("Data received", data);
            
            this.setState({ cases: data.cases, deaths: data.deaths, recovered: data.recovered });
        })
        .catch((err)=> {
            //alert("Error receiving data...")
            console.log(err);
            //this.setState({ errorMsg: err.message });
        });
    }


    render() { 

        console.log("state: ", this.state);
        const { cases, deaths, recovered } = this.state;

        return (
            
            <Container fluid
            className="p-3">

            <Alert color='warning'>
                COVID-19 data and information sourced at <a href="https://sacoronavirus.co.za/">https://sacoronavirus.co.za/</a>
            </Alert>

                <Container
                className="">
                    
                    <Row className="text-center">
                        
                        <Col>
                            <Card 
                            style={{ width: '18rem' }}
                            className="covid19-card">
                                <Card.Img variant="top" src={infectedImg} />
                                <Card.Body>
        <Card.Title
        className="card-title"><h2>{cases}</h2></Card.Title>
                                    <Card.Text>
                                    INFECTED
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col>
                        <Card style={{ width: '18rem' }}
                        className="covid19-card">
                            <Card.Img variant="top" src={recoveredImg} />
                            <Card.Body>
                                <Card.Title
                                className="card-title">
                                    <h2>{recovered}</h2></Card.Title>
                                <Card.Text>
                                RECOVERED
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                        <Card style={{ width: '18rem' }}
                        className="covid19-card">
                            <Card.Img variant="top" src={deathImg} />
                            <Card.Body>
        <Card.Title 
        className="card-title"><h2>{deaths}</h2></Card.Title>
                                <Card.Text>
                                DEAD
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
          
                </Container>
            </Container>  
            

            
         );
    }
}
 
export default COVID19News;