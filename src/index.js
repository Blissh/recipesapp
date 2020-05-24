const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');


// Initializations
const app = express();
const port = 3000;
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'bandito',
    resave: true,
    saveUninitialized:true
}))

// Global variables

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/myrecipes'));
app.use(require('./routes/recipes'));
app.use(require('./routes/users'));


// Static files 
app.use(express.static(path.join(__dirname, 'public')));
// Server listenning
app.listen(port, () => console.log(`Example app listening on port`, port));