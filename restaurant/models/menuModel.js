const mongoose =require('mongoose');
const dishSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type: String, required:true},
    dish_type:{type: String},
    description: {type: String},
    price: {type: Number, required:true}
});

module.exports = mongoose.model('menu',dishSchema);
//'user'===table name where data wll be stored