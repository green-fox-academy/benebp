'use strict';

const {expect} = require('chai');
const request = require('supertest');
const app = require('../routes');

describe('groot endpoint', () => {
  it('GET /groot not giving any parameter and the status is not ok', () => {
    request(app)
      .get('/groot')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.body.error).to.equal('I am Groot!')
      })
  });

  it('GET /groot?message=test giving parameter and the status is ok', () => {
    request(app)
      .get('/groot?message=test')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.body.received).to.equal('test')
        expect(res.body.translated).to.equal('I am Groot!')
      })
  });
});