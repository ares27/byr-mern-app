import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
//import reactstrap components
import { Alert, Button } from "reactstrap";
import { Card, Container, Row, Col } from 'react-bootstrap';

//get images
import testsImg from '../assets/tests.png';
import activeImg from '../assets/active.png';
import infectedImg from '../assets/infected.png';
import chartImg from '../assets/chart.png';
//import infectedImg from '../assets/sad.png';
import recoveredImg from '../assets/emoji.png';
import criticalImg from '../assets/dead.png';
import deathImg from '../assets/death.png';
import zaFlag from '../assets/za-flag.png';

class COVID19News extends Component {
    
    
    //contain form values
    state = { 
        title: '',
        cases: null,
        deaths: null,
        recovered: null,
        covidCases: []
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
            
            //create details object
            let covidData = {
                totalActive: data.active, 
                totalCases: data.cases,
                totalDeaths: data.deaths,
                totalRecovered: data.recovered,
                critical: data.critical,
                tests: data.tests            
            }

            this.setState({ covidCases: covidData });
            
        })
        .catch((err)=> {
            //alert("Error receiving data...")
            console.log(err);
            //this.setState({ errorMsg: err.message });
        });
    }



    render() { 

        //console.log("state: ", this.state);
        const { totalActive, totalCases, totalDeaths, totalRecovered, critical, tests } = this.state.covidCases;

        return (
            
            <Container fluid
            className=" -warning p-3">

            <Row>
                {/* COL 1 */}
                <Col lg={3} className="">
                    
                    <Row>
                        <Col className="p-5">
                        <Card style={{ width: '20rem', marginTop: '10px'}}>
                            <Card.Img variant="top" src={zaFlag} />
                            <Card.Body>
                                <Card.Title>SOUTH AFRICA</Card.Title>
                                <Card.Text>
                                COVID-19  
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>

                    <Row className="">
                        {/* <Col>Row 2 Col 1</Col> */}
                    </Row>

                    <Row className="">
                        {/* <Col>Row 3 Col 1</Col> */}
                    </Row>


                </Col>


                {/* COL 2 */}
                <Col lg={8} className="">
                
                {/* <Container className=""> */}
                    <Alert 
                    className="text-center"
                    color='warning'>
                        COVID-19 data and information sourced at <a href="https://sacoronavirus.co.za/">https://sacoronavirus.co.za/</a>
                    </Alert>

                    <Row className="justify-content-center">
                        

                        {/* TOTAL CASES */}
                        <Col md={3}
                        className="text-center pt-2">
                            
                            <Card 
                            style={{ width: '12rem', marginLeft: '20px' }}
                            className="shadow rounded
                            -warning
                            covid19-card">
                                <Card.Header>Total Cases</Card.Header>
                                <div className="p-2">
                                <Card.Img className="" variant="top" src={chartImg}/>
                                </div>
                                <Card.Body>
                                <Card.Title
                                className="card-title"><h2>{totalCases}</h2></Card.Title>
                                {/* <Card.Text className="card-text">TOTAL CASES</Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        {/* TOTAL INFECTIONS */}
                        <Col md={3}
                        className="text-center pt-2">
                            <Card 
                            style={{ width: '12rem'}}
                            className="shadow p-3 mb-5 bg-white rounded
                            -warning
                            covid19-card">
                                <Card.Img variant="top" src={infectedImg}/>
                                <Card.Body>
                                <Card.Title
                                className="card-title"><h2>{totalCases}</h2></Card.Title>
                                <Card.Text>INFECTIONS</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* TOTAL TESTS */}
                        <Col md={3}
                        className="text-center pt-2">
                        <Card style={{ width: '12rem' }}
                        className="shadow p-3 mb-5 bg-white rounded
                        -info
                        covid19-card">
                            <Card.Img variant="top" src={testsImg} />
                            <Card.Body>
                            <Card.Title 
                            className="card-title">
                                <h2>{tests}</h2></Card.Title>
                                <Card.Text>
                                TOTAL TESTS
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                               
                        {/* TOTAL ACTIVE */}
                        <Col md={3}
                        className="text-center pt-2">
                        <Card style={{ width: '12rem'}}
                        className="shadow p-3 mb-5 bg-white rounded
                        -dark
                        covid19-card">
                            <Card.Img variant="top" src={activeImg} />
                            <Card.Body>
                                <Card.Title
                                className="card-title">
                                    <h2>{totalActive}</h2></Card.Title>
                                <Card.Text>
                                ACTIVE
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                            </Card>
                        </Col>

                        {/* TOTAL RECOVERED */}
                        <Col md={3}
                        className="text-center pt-5">
                        <Card style={{ width: '12rem' }}
                        className="shadow p-3 mb-5 bg-white rounded
                        -success
                        covid19-card">
                            <Card.Img variant="top" src={recoveredImg} />
                            <Card.Body>
                                <Card.Title
                                className="card-title">
                                    <h2>{totalRecovered}</h2></Card.Title>
                                <Card.Text>
                                RECOVERED
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                            </Card>
                        </Col>

                        {/* TOTAL CRITICAL */}
                        <Col md={3}
                        className="text-center pt-5">
                        <Card style={{ width: '12rem' }}
                        className="shadow p-3 mb-5 bg-white rounded
                        -danger
                        covid19-card">
                            <Card.Img variant="top" src={criticalImg} />
                            <Card.Body>
                                <Card.Title 
                                className="card-title"><h2>{critical}</h2></Card.Title>
                                <Card.Text>
                                CRITICAL
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>

                        {/* TOTAL DEAD */}
                        <Col md={3}
                        className="text-center pt-5">
                        <Card style={{ width: '12rem' }}
                        className="shadow p-3 mb-5 bg-white rounded
                        -danger
                        covid19-card">
                            <Card.Img variant="top" src={deathImg} />
                            <Card.Body>
                                <Card.Title 
                                className="card-title"><h2>{totalDeaths}</h2></Card.Title>
                                <Card.Text>
                                DEAD
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>

                        
                        


                    </Row>
          
                {/* </Container> */}
                
                
                </Col>
                
                
                {/* COL 3 */}
                <Col lg={1} className=""></Col>
            </Row>               

                

            </Container>  
            

            
         );
    }
}
 
export default COVID19News;