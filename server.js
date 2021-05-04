const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');

//session and cookies
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const app = express();
const PORT = process.env.PORT||3000;

//cookie creation
app.use(session(sess));

//adding handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers}); 

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//connecting the css file
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});