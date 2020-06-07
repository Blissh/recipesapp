const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:recipesadmin@testcluster-omtth.mongodb.net/recipes';

mongoose.connect(uri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("DB is connected."))
    .catch((err) => console.log("Error conectando / ", err));



// admin : recipesadmin