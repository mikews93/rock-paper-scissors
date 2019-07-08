const request = require('supertest');
const app = require('../../../server');
const { expect } = require('chai');
const { stub } = require('sinon');
const Repository = require('./repository');

describe('Availability controller', () => {
  const baseUrl = '/';

  describe(`GET ${baseUrl} `, () => {
    describe('When something went wrong', () => {
      it('return a status 500', async () => {
        const repositoryStub = stub(Repository, 'getStatus');
        repositoryStub.throws(new Error({}));

        const res = await request(app).get(baseUrl);
        expect(res.status).to.be.equal(500);
        repositoryStub.restore();
      });
    });

    describe('When everything went smooth', () => {
      it('return a status 200', async () => {
        const res = await request(app).get(baseUrl);
        expect(res.status).to.be.equal(200);

        expect(res.body).to.to.haveOwnProperty('service');
      });
    });
  });
});
