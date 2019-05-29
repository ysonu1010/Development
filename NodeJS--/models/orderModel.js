const mongoose =require('mongoose');
const orderSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type : mongoose.Schema.Types.ObjectId,
        required: true
    },
    product : {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },
    quantity: {type:Number,default:1},
    time: {type:Date, default:Date.now}
});

module.exports = mongoose.model('product',productSchema);
//'user'===table name where data wll be stored

//Home work
// create product