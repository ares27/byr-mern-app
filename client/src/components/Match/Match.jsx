import React, { Component } from 'react';
import './Match.css';
import axios from 'axios';
import { Jumbotron as Jumbo, Card, Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';
import sImg from '../../assets/soccer-card-img.jpg'
import avatarImg from '../../assets/user.svg'
import { AddPlayer } from '../Player/AddPlayer';
import AddMatch from './AddMatch';
import { MatchCard } from './MatchCard';



class Match extends Component {
    
    //contain form values
    state = { 
        title: '',
        player1SelectValue: '',
        player1: '',
        score1: '',
        player2SelectValue: '',
        player2: '',
        score2: '',
        matches: [],
        errorMsg: '',
        isModalOpen: false
    };

    componentDidMount = () => {
        console.log("mounted.");
        this.getMatchCards();
    }
    

     //SUBMIT FORM
    submit = (e) => {

        e.preventDefault();
    
        //build payload
        const payload = {
          title: this.state.title,
          player1: this.state.player1SelectValue,
          score1: this.state.score1,
          player2: this.state.player2SelectValue,
          score2: this.state.score2
        }
    
        console.log(payload);
        
        //make HTTP POST - axios
        
        axios({
          url: '/api/match',
          method: 'POST',
          data: payload
        })
          .then( (response) => {
            console.log('Match data: ', response);
            console.log("Match saved successfully.");
            //reset user input form
            this.resetUserInputs();      
            
            //call latest blogPost when submit
            this.getMatchCards();
          })
          .catch( (err) => {
            console.log('Error: ', err);
          })
          
    
    }


    //RESET FORM INPUT
    resetUserInputs = () => {
        this.setState({
        //title: this.state.title,
        player1SelectValue: '',
        score1: '',
        player2SelectValue: '',
        score2: ''
         });
    };

    //INPUT ONCHANGE
    handleChange = (e) => {

        const target = e.target;
        const name = target.name;
        const value = target.value;

        //set current state
        this.setState({
            [name]: value,
            //player1SelectValue: value,
            //player2SelectValue: value
        });
       
    };


    //GET Match Cards
    getMatchCards = () => {
        axios.get('/api/matches')
            .then((response) => {
                const data = response.data;       
                this.setState({ matches: data });
                console.log("Data received", data);    
            })
            .catch((err)=> {
                //alert("Error receiving data...")
                console.log(err);
                this.setState({ errorMsg: err.message });
            });
        
    }


    //DISPLAY MATCH CARDS
    displayMatchCards = (matches) => {

        if(!matches.length) { 
            return (
                <div>
                  No match cards available.
                </div>
            );
        } else {

            return matches.map((match, index) => (
                
                    

                    <div key={index} className="card m-2 shadow-lg rounded" 
                        style={{width: '300px'}} >
                        
                        <img src={sImg} className="card-img" alt="fifa"></img>
                        <div class="card-img-overlay">
                                {/*         CARD HEADER         */}
                                <div className="card-header bg-dark text-white text-center h5">
                                    MATCH DAY
                                </div>
                            
                                {/*         CARD BODY           */}
                                <div className="card-body text-center">

                                    {/* AVATARS */}
                                    <div className="row p-1 justify-content-between">
                                        
                                        <div className="col-4 border rounded">
                                            {/* {match.player1} */}
                                            <img src={avatarImg} 
                                                style={{width: '75%'}} />
                                        </div>

                                        <div className="col-4 border rounded">
                                            <img src={avatarImg} 
                                                style={{width: '75%'}} />
                                        </div>

                                    </div>


                                    {/* VS */}
                                    <div className="row p-2">
                                        <div className="col text-center">
                                            VS
                                        </div>
                                    </div>

                                    {/* SCORE */}
                                    <div className="row p-2 justify-content-between">
                                        <div className="col-4 border rounded h4">
                                            {match.score1}
                                        </div>
                                        <div className="col-4 border rounded h4">
                                            {match.score2}
                                        </div>
                                    </div>

                                   
                                    
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    
                            </div>

                        </div>
                    </div>
              

          
            ));
        }
    }

   


    openModal = () => {
        
        this.setState({
            modalOpen: true
        })

        console.log("openModal State", this.state);
    }

    render() { 

        console.log("state: ", this.state);

        return ( 
            <React.Fragment>

          



                <Jumbo fluid className="app m-0">                
                    <Container>
                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            
                            {/* <Row>
                                <Col>
                                                           
                                    <AddPlayer />
                                </Col>
                                <Col>
                                    <AddMatch />
                                </Col>
                            </Row> */}

                            <div className="row ">
                            <div className="col">
                            </div>
                                
                                <div className="col">
                                    <AddPlayer />
                                   
                                </div>
                                <div className="col">
                                    <AddMatch />
                                   
                                </div>

                                <div className="col">
                                    
                                </div>

                            </div>
                            
                            
                        
                        
                        
                        
                        </Card.Body>
                        <Card.Footer className="text-muted">The MERN</Card.Footer>
                    </Card>
                    </Container>
                </Jumbo>

              

{/* 
            <Jumbo fluid> 
                
                <div className="container border p-2 rounded shadow-sm"> 
                   
                   MATCHES

                    <div className="card-list mt-5">
                        
                            {this.displayMatchCards(this.state.matches)}
                         
                    </div>    

                </div>
            </Jumbo> */}




            {/* MATCH CARDS */}
            <Jumbo fluid className="app m-0"> 
                
              <MatchCard />
            </Jumbo>







            
            </React.Fragment>
         );
    }
}
 
export default Match;

