import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Alert, Card, Container } from 'react-bootstrap'
import './Match.css'
import img from '../../assets/za-flag.png'
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
            <Container className="">
            

                <div className="row">
                {
                    cards.map(card => 
                        <div className="col m-1" key={card._id}>
                            
                            <Card className="m-1">
                                <div className="card-header text-center text-white bg-secondary">
                                MATCH CARD
                                </div>
                                
                               <Card body>

                                   <div className="row justify-content-between m-1 p-1">
                                     <div className="col-4 text-center p-1">
                                         <img src={img} className="rounded profile-img"  />
                                     </div>
                                     <div className="col-4 text-center p-1">
                                         <img src={img} className="rounded profile-img"  />
                                     </div>
                                 </div>

                                 <div className="row justify-content-between m-1 p-1">
                                     <div className="col-4 text-center">{card.player1}</div>
                                     <div className="col-4 text-center">{card.player2}</div>
                                 </div>

                                 <div className="row justify-content-center m-1 p-1">
                                     <div className="col-4 text-center">VS</div>
                                 </div>

                             </Card>

                             <Card.Footer className="bg-secondary text-white">

                                     <div className="row justify-content-between m-1 p-1">
                                             <div className="col-4  text-center">{card.score1}</div>
                                             <div className="col-4  text-center">{card.score2}</div>
                                     </div>

                                 </Card.Footer>

                         </Card>  
                        
                        
                        </div>
                    )
                }
                </div>


              
            
            </Container>
        </>
    );
    
}