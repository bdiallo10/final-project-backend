const express = require('express');
const app = express();

require('dotenv').config();

const routes = require('./routes');
const cors = require('cors');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')



const port = process.env.PORT || 5000;

// middleware - JSON parsing
app.use(express.json());

//middle - cors
const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions));

app.use(session({
    store: new MongoStore({url: process.env.ATLAS_URI }),
    secret: 'Ilovesoccer',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

// middleware - passport config
app.use(passport.initialize())
app.use(passport.session())


// middleware API routes
app.use('/api/v1/auth', routes.auth)
app.use('/api/v1/product', routes.product)



app.listen(process.env.PORT || `${port}`)