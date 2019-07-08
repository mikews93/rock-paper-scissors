const Entity = require('./entity');

const statusController = async (req, res, next) => {
  try {
    const entity = new Entity();
    const verify = await entity.getStatus();
    res.status(200).send(verify);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  statusController
};
