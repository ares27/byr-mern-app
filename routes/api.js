const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost');



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




router.get('/helloWorld', (req, res) => {

    res.json('Hello World!')
});








module.exports = router;