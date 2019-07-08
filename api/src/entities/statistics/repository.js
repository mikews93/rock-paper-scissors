const { HOSTNAME } = process.env;

const getStatus = async () => {
  return {
    service: 'API is running',
    machine: HOSTNAME
  };
};

module.exports = {
  getStatus
};
