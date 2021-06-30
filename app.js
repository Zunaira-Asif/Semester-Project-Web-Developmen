const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
.connect(
    'mongodb+srv://madmin:helloworld@fswdproject.ejwg7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/shoeDB',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
    ).then(()=>
    {
        console.log('Mongodb connected...');
    });