const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipes', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("DB is connected."))
    .catch((err) => console.log("Error conectando / ", err));