const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const connection = require('../../src/models/connection');
const app = require('../../src/app');
const { salesFromModel, saleFromModel, salesDB, saleFromDB } = require('../unit/mocks/sales.mock');

chai.use(sinonChai);
chai.use(chaiHttp);

describe('Testa o endpoint GET /products', function () {
  it('Será validado que é possível listar todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([salesDB]);

    const res = await chai.request(app).get('/sales');

    expect(res.body).to.be.deep.equal(salesFromModel);
    expect(res.status).to.be.equal(200);
  });

  it('Será validado que é possível listar uma venda pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[saleFromDB]]);

    const res = await chai.request(app).get('/products/1');

    expect(res.body).to.be.deep.equal(saleFromModel);
    expect(res.status).to.be.equal(200);
  });

  afterEach(function () {
    sinon.restore();
  });
}); 