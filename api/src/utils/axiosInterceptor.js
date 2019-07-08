const axios = require('axios');
const { pick } = require('lodash');

module.exports = () => {
  axios.interceptors.response.use(
    response => response,
    error =>
      Promise.reject({
        ...pick(error.response, ['status', 'config']),
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
  );
};
