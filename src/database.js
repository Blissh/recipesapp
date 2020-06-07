const mongoose = require('mongoose');

const { MONGO_USER, MONGO_PASSWORD, MONGO_DATABASE } = process.env;
const uri =  `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@testcluster-omtth.mongodb.net/${MONGO_DATABASE}`;

mongoose
    .connect(uri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("DB is connected."))
    .catch((err) => console.log("Error conectando / ", err));

