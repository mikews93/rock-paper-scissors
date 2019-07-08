const { expect } = require('chai');
const { HOSTNAME } = process.env;
const { getStatus } = require('./repository');

describe('Availability repository', () => {
  describe(`getstatus`, () => {
    describe('Return API status', () => {
      it('Return the status of the ai and the machine where the service is running', async () => {
        const result = await getStatus();
        expect(result).to.eql({
          service: 'EC Admin Website API is still running',
          machine: HOSTNAME
        });
      });
    });
  });
});
