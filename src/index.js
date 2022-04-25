const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize_db = require('./connections/sequelize');
require('dotenv').config();
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(sequelize_db.verify());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Settings
app.set('port', process.env.PORT || 4000);

// Routes
app.use('/users', require('./routes/users.routes'))

// Run server
app.listen(app.get('port'), async () => {
  console.log('app running successfully!!');
  console.log(`http://localhost:${app.get('port')}`);
  console.log((await sequelize_db.status()).message);
});


/*const express = require('express')
const app = express()
const morgan = require('morgan')

// middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

// routes

// settings
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log('app running successfully!!');
    console.log(`http://localhost:${app.get('port')}`);
  });
*/
