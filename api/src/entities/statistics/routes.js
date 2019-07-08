const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.statusController);

module.exports = router;
