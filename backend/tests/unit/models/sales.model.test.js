const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { salesDB, salesFromModel, saleFromDB, saleFromModel } = require('../mocks/sales.mock');

describe('Testa o model de vendas', function () {
  it('Testa se a função getAll retorna todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([salesDB]);
    const sales = await salesModel.getAll();
    expect(sales).to.be.deep.equal(salesFromModel);
  });

  it('Testa se a função getBySaleId retorna a venda correta', async function () {
    sinon.stub(connection, 'execute').resolves([saleFromDB]);
    const sale = await salesModel.findById(1);

    expect(sale).to.be.an('array');
    expect(sale).to.be.deep.equal(saleFromModel);
  });

  it('Testa se não retorna venda inexistente', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);
    const sale = await salesModel.findById(100);

    expect(sale).to.be.an('array');
    expect(sale).to.be.deep.equal([]);
  });

  afterEach(function () {
    sinon.restore();
  });
});