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
const mlabURI = 'mongodb://admin:admin_27@ds129010.mlab.com:29010/heroku_ztvc6xnx';
const localDB = 'mongodb://localhost/blogposts';



//connect to MONGOOSE
mongoose.connect(process.env.MONGODB_URI || mlabURI, {
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






//step 3 - check if app on Heroku
if(process.env.NODE_ENV === 'production') {
    //app.use(express.static('/client/build'));
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "client/build/index.html"));
    });
}


//run server
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))