const mongoose =require('mongoose');
const orderSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    chef: { type : mongoose.Schema.Types.ObjectId, required: true ,ref:'chef' },
    table_number : {type:Number,  required: true }, 
    order_list: {type:Array, ref:'menu'},
    quantity: {type:Number,default:1},
    order_status: {type:Number, default:0}
});

module.exports = mongoose.model('order',orderSchema);
//'user'===table name where data wll be stored

//Home work
// create product