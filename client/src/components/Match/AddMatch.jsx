import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'

class AddMatch extends Component {
    
    state = { 
        modalShow: false,
        p1Name: '',
        p1Score: '',
        p2Name: '',
        p2Score: '',
        allPlayers: []
    }

    componentDidMount = () => {
        this.getAllPlayers();
    }
      

    modalToggle = () => {
        this.setState({ modalShow: !this.state.modalShow })
    };










    //handleChange
    handleChange = (e) => {

        const target = e.target;
        const name = target.name;
        const value = target.value;
    
        //set current state
        this.setState({
            [name]: value
        });

        console.log(this.state);
    };

    //SUBMIT FORM
    submit = (e) => {

        e.preventDefault();
    
            //build payload
            const payload = { player1: this.state.p1Name, score1: this.state.p1Score, 
                              player2: this.state.p2Name, score2: this.state.p2Score };
    
            //make HTTP POST - axios
            axios({
                url: '/api/match',
                method: 'POST',
                data: payload
            })
            .then( (response) => {

                console.log("New match captured..");
                console.log('Data: ', response);
                
                //reset user input form
                this.resetUserInputs();      
                
                //call latest blogPost when submit
                setTimeout(window.location.reload(true), 3000);
                
            })
            .catch( (err) => {
                console.log('Error: ', err);
            })
    
    }




    //GET ALL PLAYERS
    getAllPlayers = () => {
        axios.get('/api/players')
            .then((response) => {
                const data = response.data;       
                this.setState({ allPlayers: data });
                console.log("All Players: ", data);    
            })
            .catch((err)=> {
                //alert("Error receiving data...")
                console.log(err);
                this.setState({ errorMsg: err.message });
            });
    }


    //DISPLAY ALL PLAYERS
    displayPlayerOptions = (allPlayers) => {

        if(!allPlayers.length) { 
            return (
                <div>
                    Something went wrong...
                </div>
            );
        } else {

            return allPlayers.map((player, index) => (

                
                <option key={index}>{player.name}</option>

               
            ));
        }
    }
















    //RESET FORM INPUT
    resetUserInputs = () => {
        this.setState({
            p1Name: '',
            p1Score: '',
            p2Name: '',
            p2Score: ''
        });
    };





    render() { 

        console.log("Players: ", this.state.allPlayers);
        console.log("state: ", this.state);

        return ( 
            <div className="container rounded"> 
            
                
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    id="add-match-modal"
                    show={this.state.modalShow}
                    onHide={this.modalToggle}
                >
                
                <Modal.Header closeButton className="bg-dark text-white text-center">
                    <h4 class="modal-title w-100">ADD PLAYER</h4>
                </Modal.Header>
                 
                    <Modal.Body
                        className="justify-content-center bg-dark text-white m-0">
                    
                            <form id="add-match-form">

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="p1Name">Player 1:</label>
                                    <select 
                                            value={this.state.p1Name} 
                                            name="p1Name" 
                                            onChange={this.handleChange}
                                            className="form-control" >
                                                <option>- Player -</option>
                                                {this.displayPlayerOptions(this.state.allPlayers)}
                                    </select>
                                </div>
                                <div className="col">
                                        <label htmlFor="p2Name">Player 2:</label>
                                        <select 
                                            value={this.state.p2Name} 
                                            name="p2Name" 
                                            onChange={this.handleChange}
                                        className="form-control" >
                                            <option selected>- Player -</option>
                                            {this.displayPlayerOptions(this.state.allPlayers)}
                                        </select>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col">
                                    <label htmlFor="p1Score">Score:</label>
                                    <input type="number" 
                                            value={this.state.p1Score} 
                                            name="p1Score" 
                                            onChange={this.handleChange} 
                                            className="form-control" placeholder="Score: " />
                                </div>
                                <div className="col">
                                        <label htmlFor="p2Score">Score:</label>
                                        <input type="number" 
                                        value={this.state.p2Score} 
                                        name="p2Score" 
                                        onChange={this.handleChange} 
                                        className="form-control" placeholder="Score: " />
                                </div>
                            </div>
                            
                            </form>
 


                    </Modal.Body>
              
                <Modal.Footer
                    className="h3 justify-content-center bg-dark text-white m-0"
                >
                    <Button variant="success" onClick={this.submit}>Submit</Button>
                    <Button variant="secondary" onClick={this.modalToggle}>Close</Button>
                </Modal.Footer>
           
            </Modal>

            <Button variant="warning" onClick={this.modalToggle}>
                ADD MATCH
            </Button>


            </div>
         );
    }
}
 
export default AddMatch;