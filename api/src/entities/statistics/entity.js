const Repository = require('./repository');

class statistics {
  async getStatus() {
    return await Repository.getStatus();
  }
}

module.exports = statistics;
