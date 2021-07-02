const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");





const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

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
    'mongodb://localhost:27017/ShoeDB',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
    ).then(()=>
    {
        console.log('Mongodb connected...');
        app.use(express.json());
        
        
        
        
    });

    

    const shoesSchema = new mongoose.Schema({
    "ShoeName": String,
    "ShoeType": String,
    "ShoeColor": String,
    "Price": String,
    "InStock": Boolean
});

var shoesModel=mongoose.model('shoes',shoesSchema);


app.get('/getShoes', async (req, res) => {
    
    try {
        const shoes= await shoesModel.find();
        res.status(200).json(shoes);
    } catch(err) {
        res.status(500).json(err);
    }
});

app.post('/createShoe',async(req,res)=>
{
    const post=new Post(
        {
            ShoeName:req.body.ShoeName,
            ShoeType:req.body.ShoeType,
            ShoeColor:req.body.ShoeColor,
            Price:req.body.ShoePrice
        })
        await post.save()
        res.send(post)
});























