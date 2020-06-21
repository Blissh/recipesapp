const { Schema, model} = require('mongoose');

// Declare the Schema of the Mongo model
var userSchema = new Schema({
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
        type:[],
        required:true,
        default:undefined
    },
    receta_pasos:{
        type:[],
        required:true,
        default:undefined
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
        type:[],
        required:true,
        default:undefined
    },

},
{
    timestamps:true,
}
);

//Export the model
module.exports = model('Recipe', userSchema, 'recipes');