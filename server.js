const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const routes = require('./routes/api')


//SET PORT
const PORT = process.env.PORT || 8000;

//mongodbURI
const mongoURI = 'mongodb+srv://admin:admin@mydatacluster-4usfy.mongodb.net/test?retryWrites=true&w=majority';










//connect to MONGOOSE
mongoose.connect('mongodb://localhost/blogposts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Mongoose connected...");
});

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));









//use morgan - http logger
app.use(morgan('tiny'));

//use routes
app.use('/api', routes);





//run server
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))