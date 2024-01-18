const { expect } = require('chai');
const sinon = require('sinon');
const { salesService } = require('../../../src/services');
const { salesDB, salesFromModel, saleFromDB, saleFromModel, anySaleMessageModel } = require('../mocks/sales.mock');
const { salesModel } = require('../../../src/models');

describe('Testa o service de vendas', function () {
  it('Testa se a função getAll retorna todas as vendas', async function () {
    sinon.stub(salesModel, 'getAll').resolves(salesDB);
    const serviceRes = await salesService.getAll();

    expect(serviceRes.status).to.equal('SUCCESS');
    expect(serviceRes.data).to.be.deep.equal(salesFromModel);
  });

  it('Testa se a função findById retorna a venda correta', async function () {
    sinon.stub(salesModel, 'findById').resolves([saleFromDB]);
    const serviceRes = await salesService.findById(1);

    expect(serviceRes.status).to.equal('SUCCESS');
    expect(serviceRes.data).to.be.deep.equal([saleFromModel]);
  });

  it('Testa se não retorna venda inexistente', async function () {
    sinon.stub(salesModel, 'findById').resolves([]);
    const serviceRes = await salesService.findById(100);

    expect(serviceRes.status).to.equal('NOT_FOUND');
    expect(serviceRes.data).to.be.deep.equal(anySaleMessageModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});