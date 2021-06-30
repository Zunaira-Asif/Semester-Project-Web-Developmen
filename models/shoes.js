const mongoose = require("mongoose");

const shoesSchema = new mongoose.Schema({});
const Shoes = mongoose.model('Shoes', shoesSchema, 'shoes');

module.exports = Shoes;