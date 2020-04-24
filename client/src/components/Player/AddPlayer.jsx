import React, { useState } from 'react'
import axios from 'axios'
import { Button, Modal, Row, Col } from 'react-bootstrap'
import './AddPlayer.css'

export const AddPlayer = (props) => {

    const [modalShow, setModalShow] = useState(false);

    const [name, setname] = useState('');
    const [aka, setaka] = useState('');
    const [slogan, setslogan] = useState('');
    
    //SUBMIT PLAYER
    const handleSubmit = (evt) => {

        evt.preventDefault();
        console.log(`Adding Player: ${name}, slogan:  ${slogan}`);
        
        //build payload
        const payload = { name: name, aka: aka, slogan: slogan };

        console.log("payload: ", payload);
  
        //make HTTP POST - axios
        axios({
            url: '/api/player',
            method: 'POST',
            data: payload
        })
        .then( (response) => {
            console.log("Player added to db: ", response);

            resetUserInputs();     
        })
        .catch( (err) => {
             console.log('Error adding player: ', err);
        })
    }

    //RESET FORM INPUT
    const resetUserInputs = () => {
        setname('');
        setaka('');
        setslogan('');
    }




    return (
        <div>
            <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    id="add-player-modal"
                    show={modalShow}
                    onHide={() => setModalShow(false)}
            >
                
                <Modal.Header 
                    className="h3 justify-content-center bg-dark text-white m-0"
                >
                ADD PLAYER  
                </Modal.Header>
                 
                    <Modal.Body
                        className="justify-content-center bg-dark text-white m-0">
                        <hr />
                        
                        <div className="row justify-content-center">
                        <form className="" id="add-player-form">
                                                
                            <div className="row justify-content-center">
                                <div className="col-2">
                                    Name: 
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control" value={name}       
                                    onChange={e => setname(e.target.value)}
                                    id="fname" 
                                    placeholder="Name: "/>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-2">
                                    AKA: 
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control" value={aka} onChange={e => setaka(e.target.value)}
                                    id="lname" 
                                    placeholder="AKA (Also Known As)"/>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-2">
                                    Slogan: 
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control" value={slogan} onChange={e => setslogan(e.target.value)}
                                    id="lname" 
                                    placeholder="Slogan...   eg: 'Just do it...'"/>
                                </div>
                            </div>

                            {/* <div className="form-group">
                                <label for="defaultCheck1">Name: </label>
                                <input type="text" className="form-control" value={name}       
                                onChange={e => setname(e.target.value)}
                                id="defaultCheck1" 
                                placeholder="Name: "/>
                            </div> */}

                            {/* <div className="form-group">
                                <label>AKA</label>
                                <input type="text" className="form-control" value={aka} onChange={e => setaka(e.target.value)}
                                id="lname" 
                                placeholder="AKA (Also Known As)"/>
                            </div> 

                            <div className="form-group">
                                <label>Slogan</label> 
                                <input type="text" className="form-control" value={slogan} onChange={e => setslogan(e.target.value)}
                                id="lname" 
                                placeholder="Slogan...   eg: 'Just do it...'"/>
                            </div>  */}


                            {/* <input className="btn btn-success" type="submit" value="Submit" /> */}
                        </form>
                        </div>



                    </Modal.Body>
              
                <Modal.Footer
                    className="h3 justify-content-center bg-dark text-white m-0"
                >
                    <Button variant="outline-success" onClick={handleSubmit}>Submit</Button>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
           
            </Modal>

            <Button variant="primary" onClick={() => setModalShow(true)}>
                ADD PLAYER
            </Button>
        </div>
    );
} 