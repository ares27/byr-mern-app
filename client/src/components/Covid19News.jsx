import React, { Component } from 'react';
import axios from 'axios';
import moduleName from 'module';
import '../App.css';
//import reactstrap components
import { Alert, Button } from "reactstrap";
import { Card, Container, Row, Col } from 'react-bootstrap';

//get icons
import { FaExclamationTriangle } from "react-icons/fa";  // Font Awesome

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
        covidCases: ''
    };

    componentDidMount = () => {
        this.getData();
        //this.getCards();
    }
      
    //GET BLOG POSTS
    getData = () => {
    
        axios.get('https://corona.lmao.ninja/countries/South Africa')
        .then((response) => {
            const data = response.data;       
            //this.setState({ posts: data });
            console.log("Data received", data);
            
            //create details object
            let covidData = [
                {   title: 'Total Cases',  value: data.cases, 
                    color: 'rgba(51, 102, 255, .75)', backgroundColor: 'rgba(51, 102, 255, .25)',  
                    image: chartImg 
                },
                { 
                    title: 'Active Cases',  value: data.active, 
                    color: 'rgb(255, 153, 51)', image: activeImg
                },
                {   
                    title: 'People Recovered',  value: data.recovered, 
                    color: 'rgb(102, 255, 51)', image: recoveredImg 
                },
                {   
                     title: 'People Critical',  value: data.critical, 
                     color: 'rgb(153, 51, 255)', image: criticalImg 
                }, 
                {   
                    title: 'Fatalities',  value: data.deaths, 
                    color: 'rgb(255, 51, 51)', image: deathImg 
                },
                
                {   
                    title: 'Cases Today',  value: data.todayCases, 
                    color: 'rgb(255, 51, 153)', image: chartImg 
                },
                            
            ]

            this.setState({ covidCases: covidData });
            
        })
        .catch((err)=> {
            //alert("Error receiving data...")
            console.log(err);
            //this.setState({ errorMsg: err.message });
        });
    }

    
    //return cards
    getCards = (covidCases) => {
                
        if(!covidCases.length) { 
            console.log("Cases Empty!");
        } else {
            console.log("Cases ready: ", covidCases);

            return covidCases.map((value, index) => (

                <div  className="">                
                    <Card key={index} 
                        style={{ width: '13rem', borderColor: value.color, backgroundImage: value.backgroundColor
                        }}
                        className="shadow rounded 
                        covid19-card">
                        <Card.Header>{value.title}</Card.Header>
                            <div className="p-4">
                            <Card.Img className="" variant="top" src={value.image}/>
                            </div>
                            <Card.Body>
                                <Card.Title
                                    className="card-title"><h2>{value.value}</h2></Card.Title>
                            </Card.Body>
                    </Card>


                </div>
            ));

        }
    }

    //generate randmo color
    createRandomColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log("randomColor: ", randomColor);
    }

    



    render() { 

        //console.log("state: ", this.state);
        console.log("cases: ", this.state.covidCases);
        const { totalActive, totalCases, totalDeaths, totalRecovered, critical, tests, todayCases } = this.state.covidCases;


        return (
                    
            <Container fluid
            className="p-3 covidNews-container">

                    {/* <Button onClick={this.createRandomColor}>CARDS</Button> */}
                    <Alert className="text-center" color='warning'>
                        COVID-19 data and information sourced at <a href="https://sacoronavirus.co.za/">https://sacoronavirus.co.za/</a>
                        <p>For more information, please visit <a href="https://sacoronavirus.co.za/">WHO</a>. Stay tuned, stay home, stay safe. </p>
                    </Alert>

                    <Alert className="text-center" color='danger'>
                        
                        <marquee>
                            <FaExclamationTriangle size='1em'/>
                            CORONA VIRUS(COVID-19) 24-HOUR HOTLINE NUMBER: 0800 029 999
                        </marquee>
                    </Alert>
                    


                    {/* 
                    <Row className="border border-success justify-content-center p-2">
                        marquee
                    </Row>  */}

                    <Row className="justify-content-between text-center p-4">
                        {this.getCards(this.state.covidCases)} 
                    </Row> 
                                   

            </Container>  
            
         
            
         );
    }
}
 
export default COVID19News;