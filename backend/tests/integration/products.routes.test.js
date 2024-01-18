const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const connection = require('../../src/models/connection');
const app = require('../../src/app');
const { productsFromModel, productModel, productsDB, productDB } = require('../unit/mocks/products.mock');

chai.use(sinonChai);
chai.use(chaiHttp);

describe('Testa o endpoint GET /products', function () {
  it('Será validado que é possível listar todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productsDB]);

    const res = await chai.request(app).get('/products');

    expect(res.body).to.be.deep.equal(productsFromModel);
    expect(res.status).to.be.equal(200);
  });

  it('Será validado que é possível listar um produto pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[productDB]]);

    const res = await chai.request(app).get('/products/3');

    expect(res.body).to.be.deep.equal(productModel);
    expect(res.status).to.be.equal(200);
  });

  afterEach(function () {
    sinon.restore();
  });
}); 