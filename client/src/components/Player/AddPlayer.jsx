import React, { useState } from 'react'
import axios from 'axios'
import { Button, Modal, Row, Col } from 'react-bootstrap'
import './AddPlayer.css'

export const AddPlayer = (props) => {

    const [modalShow, setModalShow] = useState(false);
    const [name, setName] = useState({ fname: '', aka: '', slogan: ''});
    
    //SUBMIT PLAYER
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Adding Player: ${name.fname}, slogan:  ${name.slogan}`);
        
        //build payload
        const payload = { name: name.fname, aka: name.aka, slogan: name.slogan };

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

       window.location.reload(true);
    }

    //RESET FORM INPUT
    const resetUserInputs = () => {
        setName({ ...name,
            fname: '',
            aka: '',
            slogan: ''
        })
    }




    return (
        <div>
            <Modal  
                    size="sm"
                    centered
                    id="add-player-modal"
                    show={modalShow}
                    onHide={() => setModalShow(false)}
            >
                

                <Modal.Header closeButton 
                    className="bg-dark text-white text-center">
                    <h4 class="modal-title w-100">ADD PLAYER</h4>
                </Modal.Header>




                <Modal.Body className="bg-dark text-white">
                <form id="add-player-form">
                <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" value={name.fname} 
                        id="name" placeholder="Name: "
                        onChange={e => setName({...name, fname: e.target.value })}
                    />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastname">AKA:</label>
                        <input type="text" className="form-control" value={name.lname} id="lastname" placeholder="Also Known As" 
                        onChange={e => setName({...name, aka: e.target.value })}
                    />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastname">Slogan:</label>
                        <input type="text" className="form-control" value={name.slogan} id="lastname" placeholder="Just do it!" 
                        onChange={e => setName({...name, slogan: e.target.value })}
                    />
                    </div>
                </form>
                {/* <form onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" value={name.fname} 
                        id="name" placeholder="Name: "
                        onChange={e => setName({...name, fname: e.target.value })}
                    />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastname">AKA:</label>
                        <input type="text" className="form-control" value={name.lname} id="lastname" placeholder="Also Known As" 
                        onChange={e => setName({...name, aka: e.target.value })}
                    />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastname">Slogan:</label>
                        <input type="text" className="form-control" value={name.slogan} id="lastname" placeholder="Just do it!" 
                        onChange={e => setName({...name, slogan: e.target.value })}
                    />
                    </div>

                    <button className="btn btn-success btn-block" type="submit">SUBMIT</button>
                </form> */}
                

                </Modal.Body>

                {/*
                <div className="card">
                 <div className="card-header text-center">
                    ADD PLAYER
                     <img width="15" height="15" src={closeBtn} onClick={() => setShow(false)}/> 
                    
                    <button className="btn btn-sm btn-outline-danger" id="close-btn"
                    onClick={() => setModalShow(false)}>X</button> 
                </div> 
                    <div className="card-body">
                    
                    </div>
                </div>
                */}
           



                    <Modal.Footer className="bg-dark text-white">
                        <Button variant="success" onClick={handleSubmit}>
                            SAVE
                        </Button>
                        <Button variant="secondary" onClick={() => setModalShow(false)}>
                            Close
                        </Button>
                    </Modal.Footer>









            </Modal>

            <Button variant="primary" onClick={() => setModalShow(true)}>
                ADD PLAYER
            </Button>
        </div>
    );
} 