require('dotenv').config();
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

jest.setTimeout(6000);

global.chai = chai;
global.expect = expect;
global.sinon = sinon;
