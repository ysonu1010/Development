const mongoose =require('mongoose');
const chefSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type: String, required:true, unique:true},
    expertise:{type: String, required:true ,unique :true},
    password: {type: String, required:true}
});

module.exports = mongoose.model('chef',chefSchema);