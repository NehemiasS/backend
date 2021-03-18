const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares (functions that arrive before routes)
app.use(cors());
app.use(express.json());


// routes
app.use('/api/categories', require ('./routers/categories'));
app.use('/api/products', require('./routers/products'));
app.use('/api/users', require('./routers/users'));

module.exports = app;