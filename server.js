const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

//SET PORT
const PORT = process.env.PORT || 8000;

//use morgan - http logger
app.use(morgan('tiny'));






//SERVER ROUTES
app.get('/', (req, res) => {

    res.json('Hello World!')
});

app.get('/api', (req, res) => {

    res.json('Hello World!')
});















//run server
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))