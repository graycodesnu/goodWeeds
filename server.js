const path = require('path');
const express = require('express')
const session = require('express-session');
const expressHandlebars = require('express-handlebars')
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers.js');

// * Port setup  
const app = express();
const PORT = process.env.PORT || 3001;

// * Express-Session
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//* Handlebars
const handlebars = expressHandlebars.create({ helpers });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


//* Calls CSS + JS from public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// * PORT 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port 3001!'));
});