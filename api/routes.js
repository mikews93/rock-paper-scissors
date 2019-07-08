const router = require('express').Router();
const routes = require('./src/entities');

module.exports = () => {
  /**
   * Main routes
   * Looks like:
   * router.use('/[base_url]', routes.middleware)
   */
  router.use('/statistics', routes.statistics);

  return router;
};
