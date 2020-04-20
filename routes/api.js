const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost');
const Match = require('../models/match');
const Player = require('../models/player')









//SERVER ROUTES
router.get('/', (req, res) => {

    BlogPost.find({ })
        .then((data) => {
            console.log("Data: ", data);
            res.json(data);
        })
        .catch((error) => {
            console.log("error: ", error);
        })
});

//new BlogPost
router.post('/save', (req, res) => {

     //set data obj
     const data = req.body;
     //set new BlogPost object for data from req.body
     const newBlogPost = new BlogPost(data);
 
     newBlogPost.save((err) => {
         if(err) {
             res.status(500).json({ msg: "Error"});
         } else {
             res.json({ msg: "Data posted successfully." });
         }
     }); 
});













//********         ALL MATCH ROUTES                                 */
//get all Matches
router.get('/matches', (req, res) => {

    Match.find({ })
        .then((data) => {
            console.log("Data: ", data);
            res.json(data);
        })
        .catch((error) => {
            console.log("error: ", error);
        })
});

//new Match
router.post('/match', (req, res) => {
    
    //set data obj
    const data = req.body;
    //set new Match object for data from req.body
    const newMatch = new Match(data);
    //res.json({ msg: "Match created successfully." });
    
    newMatch.save((err) => {
         if(err) {
             res.status(500).json({ msg: "Error"});
         } else {
             res.json({ msg: "Match created successfully." });
         }
    }); 
});

//////////////////////////////////////////////////////////////////////














//********         ALL PLAYER ROUTES                                 */
//get all Players
router.get('/players', (req, res) => {

    Player.find({ })
        .then((data) => {
            console.log("Data: ", data);
            res.json(data);
        })
        .catch((error) => {
            console.log("error: ", error);
        })
});

//new Player
router.post('/player', (req, res) => {
    
    //set data obj
    const data = req.body;
    //set new Match object for data from req.body
    const newPlayer = new Player(data);
    //res.json({ msg: "Match created successfully." });
    
    newPlayer.save((err) => {
         if(err) {
             res.status(500).json({ msg: "Error"});
         } else {
             res.json({ msg: "Match created successfully." });
         }
    }); 
});

//////////////////////////////////////////////////////////////////////



router.get('/helloWorld', (req, res) => {

    res.json('Hello World!')
});








module.exports = router;