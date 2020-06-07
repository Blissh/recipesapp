const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');
// Declare the Schema of the Mongo model

var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    rol:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
}

);

userSchema.methods.encryptPass = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.methods.matchPass = async function(password){
    return await bcrypt.compare(password, this.password);
};


//Export the model
module.exports = mongoose.model('User', userSchema);