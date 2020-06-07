const { Schema, model} = require('mongoose');

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    receta_nombre:{
        type:String,
        required:true,
    },
    receta_tipo:{
        type:String,
        required:true,
    },
    receta_dificultad:{
        type:String,
        required:true,
    },
    receta_ingredientes:{
        type:Array,
        required:true,
    },
    receta_pasos:{
        type:Array,
        required:true,
    },
    receta_tiempo:{
        type:String,
        required:true,
    },
    receta_preview:{
        type:String,
        required:true,
    },
    receta_images:{
        type:Array,
        required:true,
    },

},
{
    timestamps:true,
}
);

//Export the model
module.exports = model('Recipe', userSchema);