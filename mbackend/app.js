const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const my=require("../routes/shoeroutes");

const app = express();
//const port = process.env.PORT || 30000;
var server = app.listen(30000, function() {
    console.log(new Date().toISOString() + ": server started on port 3000");
});
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});


var db = mongoose.connection;

app.get('/get', (req, res) => {

    const newPromise = new Promise((resolve, reject) => {

        my.getProduct('foo').then((data) => {
            console.log("Entry.......................");
            console.log(data);
            console.log("Exit.......................");
            const newdata = JSON.stringify(data);
            res.send(newdata);

            resolve('From newPromise ');

        })
    });
    //});

    newPromise.then(console.log);
});





// const app = express();
// const port = process.env.PORT || 30000;
// var server = app.listen(port, function() {
//     console.log(new Date().toISOString() + ": server started on port 3000");
// });
// app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//     next();
// });

// mongoose
// .connect(
//     'mongodb+srv://madmin:helloworld@fswdproject.ejwg7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/shoeDB',
//     {
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     }
//     ).then(()=>
//     {
//         console.log('Mongodb connected...');
//     });








