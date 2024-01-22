const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesService } = require('../../../src/services');
const { salesFromModel, saleFromModel, anySaleMessageModel, salesSuccess, saleSuccess, saleUnsuccessful } = require('../mocks/sales.mock');
const { salesController } = require('../../../src/controllers');

chai.use(sinonChai);

describe('Testa o controller de vendas', function () {
  it('Testa se a função getAll retorna todas as vendas com status de sucesso', async function () {
    const req = {
      params: {},
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(salesService, 'getAll').resolves(salesSuccess);
    await salesController.getAll(req, res, next);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesFromModel);
  });

  it('Testa se a função findById retorna uma venda com status de sucesso', async function () {
    const req = {
      params: { id: 1 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(salesService, 'findById').resolves(saleSuccess);
    await salesController.findById(req, res, next);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleFromModel);
  });

  it('Testa se a função findById retorna um erro caso a venda não exista', async function () {
    const req = {
      params: { id: 100 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(salesService, 'findById').resolves(saleUnsuccessful);
    await salesController.findById(req, res, next);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(anySaleMessageModel);
  });

  it('Testa se a função create retorna uma venda com status de sucesso', async function () {
    const req = {
      params: {},
      body: {
        sellerId: 1,
        productId: 1,
        quantity: 1,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(salesService, 'createSale').resolves(saleSuccess);
    await salesController.createSale(req, res, next);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleFromModel);
  });
  afterEach(function () {
    sinon.restore();
  }); 
});