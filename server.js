const path = require('path');
const express = require('express')
const expressHandlebars = require('express-handlebars')
const session = require('express-session');

// * Port setup  
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

//* Handlebars
const handlebars = expressHandlebars.create({});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


//* Calls CSS + JS from public folder
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// * Calls express-session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

// * PORT 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});