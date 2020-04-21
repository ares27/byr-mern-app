import React, { Component } from 'react';
import '../Match.css';
import axios from 'axios';
import { Jumbotron as Jumbo, Card, Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';
import sImg from '../assets/soccer-card-img.jpg'
import avatarImg from '../assets/user.svg'



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


            

{/* 
                <button className="btn btn-dark"
                    onClick={(e) => this.setState({ isModalOpen: true })}>OPEN</button>
                <MyModal 
                    isModalOpen={this.state.isModalOpen} 
                    onClose={(e) => this.setState({ isModalOpen: false})}>
                    This is the dialog on App page.
                    I am a new DIV in parent element.

                

                </MyModal>
 */}



                <Jumbo fluid className="app m-0">                
                    <Container>
                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            
                            <Row>
                                <Col>
                                    
                                    <Button variant="primary" href="#" 
                                    className="homeBtns" >+PLAYER
                                    </Button>
                                    
                                    <Button variant="warning" href="#" className="homeBtns">TABLES
                                    </Button>
                                </Col>
                            </Row>
                            
                            
                        
                        
                        
                        
                        </Card.Body>
                        <Card.Footer className="text-muted">The MERN</Card.Footer>
                    </Card>
                    </Container>
                </Jumbo>

              


                <Jumbo fluid> 
                
                <div className="container border p-2 rounded shadow-sm"> 
                   
                
                    <form className="score-form p-2" onSubmit={this.submit}>
                        
                        {/* <div className="row border m-1">
                            <div className="col bg-success text-center p-2">
                                GOOD GAMES
                            </div>
                        </div> */}


                        <div className="row mt-4">
                            
                            <div className="col">
                                
                                {/* <input type="text" value={this.state.player1} name="player1" onChange={this.handleChange} 
                                    className="form-control" placeholder="Player 1" /> */}

                                <select value={this.state.player1SelectValue} name="player1SelectValue" onChange={this.handleChange}
                                className="form-control" >
                                    <option selected>-- Select Player --</option>
                                    <option value="Byron">Byron</option>
                                    <option value="Nathan">Nathan</option>
                                    <option value="Selwyn">Selwyn</option>
                                </select>



                            </div>
                            <div className="col">

                                {/* <input type="text" value={this.state.player2} name="player2" onChange={this.handleChange} 
                                    className="form-control" placeholder="Player 2" /> */}


                                <select value={this.state.player2SelectValue} name="player2SelectValue" onChange={this.handleChange}
                                className="form-control" >
                                    <option selected>-- Select Player --</option>
                                    <option value="Byron">Byron</option>
                                    <option value="Nathan">Nathan</option>
                                    <option value="Selwyn">Selwyn</option>
                                </select>

                                
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <input type="text" value={this.state.score1} name="score1" onChange={this.handleChange} 
                                    className="form-control" placeholder="Score: " />
                            </div>
                            <div className="col">
                                <input type="text" value={this.state.score2} name="score2" onChange={this.handleChange} 
                                    className="form-control" placeholder="Score: " />
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block mt-2">SUBMIT</button>
                    </form>


                    <div className="card-list mt-5">
                        
                            {this.displayMatchCards(this.state.matches)}
                         
                    </div>    

                </div>
            </Jumbo>
            
            
            </React.Fragment>
         );
    }
}
 
export default Match;

