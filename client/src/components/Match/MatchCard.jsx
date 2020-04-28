import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Alert, Card, Container } from 'react-bootstrap'
import './Match.css'
import img from '../../assets/za-flag.png'
import vsImg from '../../assets/vs.png'

import { CardSubtitle } from 'react-bootstrap/Card'

export const MatchCard = () => {


    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true) 

    useEffect(() => {
        axios.get('/api/matches')
            .then((response) => {
                const data = response.data;       
                console.log("Matches", data);  
                
                //set state
                setCards(data);

                setIsLoading(false);
            })
            .catch((err)=> {
                //alert("Error receiving data...")
                console.log(err);
            });
    }, [])


    console.log(`state: ${isLoading}`);
    
    if(isLoading===true) {

        return (
            <>
                <Container>
                <Alert variant="danger">
                    <Alert.Heading>Loading data... </Alert.Heading>
                    <p>
                        Match cards every other day. Watch the players get stuck in... 
                    </p>
                </Alert>
                </Container>
            </>
        );
    }

    return (
        <>  
            <Container>
            

                <div className="row flex-container wrap justify-content-center p-1">
                {
                    cards.map(card => 
                        // <div className="col m-1" key={card._id}>
                            
                            <Card key={card._id} id="match-card" className="m-2" >
                                <div className="card-header text-center text-white bg-secondary">
                                MATCH CARD
                                </div>
                                
                               <Card body>

                                   <div className="row justify-content-between m-1">
                                     <div className="col-5 text-center p-1">
                                         {/* <img src={img} className="rounded profile-img"  /> */}
                                         <figure class="figure">
                                            <img src={img} class="figure-img img-fluid rounded w-75" alt="Player-1-img" />
                                            <figcaption class="figure-caption text-center">{card.player1}</figcaption>
                                         </figure>
                                     </div>
                                     <div className="col-5 text-center p-1">
                                         {/* <img src={img} className="rounded profile-img"  /> */}
                                         <figure class="figure">
                                            <img src={img} class="figure-img img-fluid rounded w-75" alt="Player-1-img" />
                                            <figcaption class="figure-caption text-center">{card.player2}</figcaption>
                                         </figure>
                                     </div>
                                 </div>

                             
                                 <div className="row justify-content-center">
                                     <div className="col-5 text-center">
                                        <img src={vsImg} className="img-fluid rounded w-75" alt="vs-img" />
                                     </div>
                                 </div>

                             </Card>

                             <Card.Footer className="bg-secondary text-white">

                                     <div className="row justify-content-between">
                                             <div className="col-5  text-center">{card.score1}</div>
                                             <div className="col-5  text-center">{card.score2}</div>
                                     </div>

                                 </Card.Footer>

                         </Card>  
                        
                        
                        // </div>
                    )
                }
                </div>


              
            
            </Container>
        </>
    );
    
}