/*
Define our server bahavior. 
We will use express as the server, and mongoDB atlas as the database. 
We connect to the database, setup the router, and start listening. 
*/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection to database established. ")
})

const imageRouter = require('./routes/images');
app.use('/images', imageRouter)


var server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

module.exports = server
