//const { response } = require("express");
const express=require("express");
//const s=require("../models/shoes");
//const app=express();
//const Products = mongoose.model('products', shoesModel.productSc);
const mongoose = require("mongoose");

// const app = express();
// //const port = process.env.PORT || 30000;
// var server = app.listen(3000, function() {
//     console.log(new Date().toISOString() + ": server started on port 3000");
// });
// //app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//     next();
// });

mongoose
.connect(
    'mongodb://localhost:27017/shoeDB',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    ).then(()=>
    {
        console.log('Mongodb connected...');
    });

const shoesSchema = new mongoose.Schema({
    "Shoe Name": String,
    "Shoe Type": String,
    "Shoe Color": String,
    "Price": String,
    "In Stock": Boolean
});
const Shoes = mongoose.model('Shoes', shoesSchema);











// // app.get("/shoes",async(req,res)=>
// // {
// //     const shoes=await shoesModel.find({});

// //     try {
// //         res.send(shoes);
// //     } catch (error) {
// //         res.status(500).send(error);
// //     }
// // });


// // async function createProducts(data) {
// //     console.log("i am in create Products:", data.body);
// //     // const products = new y.Products({
// //     //     id: "1010",

// //     //     Image: "assets/images/items/7.jpg",

// //     //     Title: "Val",

// //     //     price: "1480"


// //     // });


// //     // const result = await products.save();
// //     //console.log(result);
// // }

// // y.createProducts();
async function getProduct(A) {

    console.log("getting the data",A);
    console.log(Shoes);
    const myproduct = await Shoes.find();
console.log("In dats");
    console.log(myproduct);
    return myproduct;
}



//x=getProduct();
console.log("we in");

module.exports.getProduct=getProduct;


// // async function updateProduct(id) {
// //     //approach :Query first
// //     //find by id
// //     //modify its properities
// //     //save()
// //     const prod = await Products.findById(id);
// //     if (!prod) return;
// //     prod.Title = "New Arrival";
// //     prod.price = "140";
// //     prod.set({
// //         Title: "New Arrival in ISL",
// //         price: "1400"
// //     });


// //     const result = await prod.save();
// //     console.log(result);
// // }


// // //updating the Record by id
// // //updateProduct('60db32aee5663b19b4c8f2e0');



// // async function RemoveProduct(id) {

// //     const result = await Products.findByIdAndDelete(id);
// //     console.log(result);
// // }
// // RemoveProduct('60d9785f155528406cf8bfd9');



// module.exports=app;