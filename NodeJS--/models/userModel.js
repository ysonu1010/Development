const mongoose =require('mongoose');
const userSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type: String, required:true},
    email:{type: String, required:true ,unique :true},
    password: {type: String, required:true},
});

module.exports = mongoose.model('user',userSchema);
//'user'===table name where data wll be stored
//by mongoose.model('user',userSchema) ==>mongoose compiles an object for you
//model is a distinct class in mongoose 
//so we will create an instance of userModel in user.js to accept the data
//from post body