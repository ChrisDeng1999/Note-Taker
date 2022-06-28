const express = require('express');



//import our notes route
const notes = require('./notes');


const app = express();

app.use('/notes', notes);


module.exports = app;