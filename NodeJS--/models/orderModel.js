const mongoose =require('mongoose');
const orderSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type : mongoose.Schema.Types.ObjectId, required: true ,ref:'user' }, //userID
    product : { type:mongoose.Schema.Types.ObjectId,  required: true ,ref: 'product'}, //product ID
    quantity: {type:Number,default:1},
    time: {type:Date, default:Date.now}
});

module.exports = mongoose.model('order',orderSchema);
//'user'===table name where data wll be stored

//Home work
// create product