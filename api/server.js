const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes')();
const compression = require('compression');
const axiosInterceptor = require('./src/utils/axiosInterceptor');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());

// Load api routes
app.use('/', routes);

// Add axios response interceptor
axiosInterceptor();

/*eslint no-unused-vars: ["error", { "args": "none" }]*/
app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${req.method} ${req.url} ${error.message}`);
  }

  return res.status(error.status || 500).send({ error: error.message });
});

module.exports = app;
