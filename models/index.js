const mongoose = require('mongoose');
require('dotenv').config()

// mongoose connection string
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

if (process.env.NODE_ENV === 'Production') {
    app.use(express.static('seattle-soccer-frontend/build'))
}

module.exports = {
    Product: require('./product'),
    User: require('./user')
    // Player: require('./player'),
    // Tournament: require('./tournament'),
}