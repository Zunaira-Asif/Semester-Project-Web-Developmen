const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");


const app = express();
//const port = process.env.PORT || 3000;
var server = app.listen(3000, function() {
    console.log(new Date().toISOString() + ": server started on port 3000");
});
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

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

var db = mongoose.connection;







