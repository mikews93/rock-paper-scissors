const mongoose = require('mongoose');

const getConnection = () => {
  const mongoDbUrl = process.env.MONGO_DB_URL;
  if (!mongoose.connection.readyState === 0) {
    mongoose.connect(mongoDbUrl, error =>
      error ? console.log(`MONGO CONNECTION ERROR: ${error}`) : null
    );
    mongoose.set('useCreateIndex', true);
  }
  return mongoose.connection;
};

module.exports = { getConnection };
