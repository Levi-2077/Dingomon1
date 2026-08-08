//backend rules to write code

//step 1 : import all required modules ; mongoose, cors, dotenv, bcrypt, jsonwebtoken 

//how to import modules? - by using required() function

const express = require('express');  //express module is imported

const app = express();

//step 3 : define routes ; API endpoints for coomunication btw frontend and backend

app.get('/login', function(req, res){
    res.send('Welcome to login page');
})

app.get('/register', function(req, res){
    res.send('Welcome to register page');

})

//step 4 : start the bankend server by using app.listen() function

app.listen(3000, function(){
    console.log('backend server is running in port number 3000');
})