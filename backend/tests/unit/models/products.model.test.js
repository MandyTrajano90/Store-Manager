const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { productsDB, productsFromModel, productDB, productModel, notAProductDB, notAProductModel } = require('../mocks/products.mock');

describe('Testa o model de produtos', function () {
  it('Retorna todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productsDB]);
    const products = await productsModel.getAll();

    expect(products).to.be.an('array');
    expect(products).to.be.deep.equal(productsFromModel);
  });
  it('Retorna um produto pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[productDB]]);
    const product = await productsModel.findById(3);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productModel);
  });
  it('Retorna um erro caso o produto não exista', async function () {
    sinon.stub(connection, 'execute').resolves([[notAProductDB]]);
    const product = await productsModel.findById(100);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(notAProductModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});